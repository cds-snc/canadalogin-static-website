#!/usr/bin/env python3
"""Pick and announce the weekly CanadaLogin Website ATC Rotation for #cl-website.

ATC is the teammate on point for the channel that week.

The rotation is derived from the calendar rather than stored state, so any past
or future week can be recomputed and the schedule never drifts if a run is
missed.

Usage:
    rotation.py who     [--date YYYY-MM-DD]
    rotation.py message [--date YYYY-MM-DD]
    rotation.py swap --week YYYY-MM-DD --slack-id U123 [--requested-by U456]
"""

import argparse
import json
import sys
from datetime import date, datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

import yaml

CONFIG = Path(__file__).resolve().parents[2] / "rotation.yml"
OVERRIDES = Path(__file__).resolve().parents[2] / "rotation-overrides.yml"
DOC = Path(__file__).resolve().parents[2] / "ATC-ROTATION.md"
START_MARKER = "<!-- schedule:start -->"
END_MARKER = "<!-- schedule:end -->"


def load(path, fallback):
    if not path.exists():
        return fallback
    return yaml.safe_load(path.read_text()) or fallback


def monday_of(day):
    return day - timedelta(days=day.weekday())


def as_date(value):
    if isinstance(value, date):
        return value
    return datetime.strptime(str(value), "%Y-%m-%d").date()


def on_vacation(slack_id, vacations, week_start, week_end):
    for entry in vacations:
        if entry.get("slack_id") != slack_id:
            continue
        # Any overlap with the coverage week disqualifies the whole week: a
        # half-covered week is worse than handing it to someone else.
        if as_date(entry["start"]) <= week_end and as_date(entry["end"]) >= week_start:
            return True
    return False


def pick(config, overrides, day):
    members = config["members"]
    if not members:
        raise SystemExit("rotation.yml has no members")

    week_start = monday_of(day)
    week_end = week_start + timedelta(days=4)

    for entry in overrides.get("overrides") or []:
        if as_date(entry["week"]) != week_start:
            continue
        member = next(
            (m for m in members if m["slack_id"] == entry["slack_id"]), None
        )
        if member is None:
            raise SystemExit(
                f"override for {week_start} names {entry['slack_id']}, "
                "who is not in rotation.yml"
            )
        return member, week_start, week_end, "override"

    weeks = (week_start - as_date(config["anchor_week"])).days // 7
    start_index = weeks % len(members)

    for offset in range(len(members)):
        member = members[(start_index + offset) % len(members)]
        if not on_vacation(
            member["slack_id"], config.get("vacations") or [], week_start, week_end
        ):
            return member, week_start, week_end, "rotation"

    raise SystemExit(f"everyone is away the week of {week_start}")


def slack_time(day, clock, timezone):
    """Epoch seconds for a wall-clock time in someone else's timezone."""
    hour, minute = (int(part) for part in clock.split(":"))
    moment = datetime.combine(day, datetime.min.time()).replace(
        hour=hour, minute=minute, tzinfo=ZoneInfo(timezone)
    )
    return int(moment.timestamp())


def wall_clock(timestamp, timezone):
    """Render an instant as (clock, tz abbreviation) in a given timezone."""
    moment = datetime.fromtimestamp(timestamp, ZoneInfo(timezone))
    clock = moment.strftime("%-I:%M %p").replace("AM", "a.m.").replace("PM", "p.m.")
    return clock.replace(":00", ""), moment.strftime("%Z")


def build_message(config, member, week_start, week_end, source):
    coverage = config["coverage"]
    tz = member["timezone"]
    team_tz = config.get("team_timezone") or "America/Toronto"
    start_at = slack_time(week_start, coverage["start"], tz)
    end_at = slack_time(week_start, coverage["end"], tz)

    note = " (swapped)" if source == "override" else ""
    text = (
        f":wave: Your weekly ATC is <@{member['slack_id']}> for the CanadaLogin website "
        f"from {week_start:%a, %b %-d} to {week_end:%a, %b %-d}{note}, "
        f"{coverage['start']} to {coverage['end']} daily (in their timezone).\n"
        f"Post here as usual; the ATC will answer questions, triage issues and "
        f"handle any production deploys for the week."
    )

    # Most of the team is in Eastern, so spell out the equivalent hours rather
    # than leaving people to work out the offset.
    if ZoneInfo(tz).utcoffset(datetime.fromtimestamp(start_at, ZoneInfo(tz))) != ZoneInfo(
        team_tz
    ).utcoffset(datetime.fromtimestamp(start_at, ZoneInfo(team_tz))):
        team_start, team_label = wall_clock(start_at, team_tz)
        team_end, _ = wall_clock(end_at, team_tz)
        _, own_label = wall_clock(start_at, tz)
        text += (
            f"\n:clock11: In Eastern that's *{team_start} to {team_end} {team_label}*, "
            f"since <@{member['slack_id']}> is in {own_label}."
        )

    return text


def federal_stat_holiday(config, day):
    for entry in config.get("federal_stat_holidays") or []:
        if as_date(entry["date"]) == day:
            return entry["name"]
    return None


def cmd_who(args):
    config = load(CONFIG, {})
    member, week_start, week_end, source = pick(
        config, load(OVERRIDES, {}), as_date(args.date)
    )
    print(
        json.dumps(
            {
                "name": member["name"],
                "slack_id": member["slack_id"],
                "timezone": member["timezone"],
                "week_start": str(week_start),
                "week_end": str(week_end),
                "source": source,
                "user_group_id": config.get("user_group_id") or "",
            }
        )
    )


def cmd_message(args):
    config = load(CONFIG, {})
    overrides = load(OVERRIDES, {})
    day = as_date(args.date)
    holiday = federal_stat_holiday(config, day)
    if holiday:
        text = (
            f":canada: Today is {holiday}, a federal statutory holiday. "
            "There is no ATC coverage today; regular coverage resumes tomorrow."
        )
    else:
        text = build_message(config, *pick(config, overrides, day))

        # A week's warning is the difference between planning around your turn and
        # finding out on the morning.
        following, next_start, _, _ = pick(
            config, overrides, monday_of(day) + timedelta(weeks=1)
        )
        text += f"\n:calendar: Up next, week of {next_start:%b %-d}: <@{following['slack_id']}>."

    print(
        json.dumps(
            {
                "text": text,
                "blocks": [
                    {"type": "section", "text": {"type": "mrkdwn", "text": text}}
                ],
            }
        )
    )


def cmd_schedule(args):
    config = load(CONFIG, {})
    overrides = load(OVERRIDES, {})
    start = monday_of(as_date(args.date))

    rows = ["| Week | ATC |", "| --- | --- |"]
    for offset in range(args.weeks):
        week = start + timedelta(weeks=offset)
        member, week_start, week_end, source = pick(config, overrides, week)
        swapped = " _(swapped)_" if source == "override" else ""
        rows.append(
            f"| {week_start:%b %-d} – {week_end:%b %-d}, {week_end:%Y} "
            f"| {member['name']}{swapped} |"
        )
    table = "\n".join(rows)

    if not args.write:
        print(table)
        return

    doc = DOC.read_text()
    before, _, rest = doc.partition(START_MARKER)
    _, _, after = rest.partition(END_MARKER)
    if not rest or not after:
        raise SystemExit(f"{DOC.name} is missing the schedule markers")
    DOC.write_text(
        f"{before}{START_MARKER}\n\n{table}\n\nUpdated automatically.\n{END_MARKER}{after}"
    )


def cmd_swap(args):
    config = load(CONFIG, {})
    if not any(m["slack_id"] == args.slack_id for m in config["members"]):
        raise SystemExit(f"{args.slack_id} is not in rotation.yml")

    week = monday_of(as_date(args.week))
    overrides = load(OVERRIDES, {"overrides": []})
    entries = [
        e for e in (overrides.get("overrides") or []) if as_date(e["week"]) != week
    ]
    entry = {"week": str(week), "slack_id": args.slack_id}
    if args.requested_by:
        entry["requested_by"] = args.requested_by
    entries.append(entry)
    entries.sort(key=lambda e: as_date(e["week"]))

    header = OVERRIDES.read_text().split("overrides:")[0] if OVERRIDES.exists() else ""
    OVERRIDES.write_text(header + yaml.safe_dump({"overrides": entries}, sort_keys=False))
    print(f"{args.slack_id} now covers the week of {week}", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    today = str(date.today())
    for name, handler in (("who", cmd_who), ("message", cmd_message)):
        p = sub.add_parser(name)
        p.add_argument("--date", default=today)
        p.set_defaults(func=handler)

    p = sub.add_parser("schedule")
    p.add_argument("--date", default=today)
    p.add_argument("--weeks", type=int, default=12)
    p.add_argument("--write", action="store_true", help="update ATC-ROTATION.md in place")
    p.set_defaults(func=cmd_schedule)

    p = sub.add_parser("swap")
    p.add_argument("--week", required=True)
    p.add_argument("--slack-id", required=True)
    p.add_argument("--requested-by", default="")
    p.set_defaults(func=cmd_swap)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
