# ATC rotation

**ATC** stands for **air traffic controller**. Each week, one member of the team
takes responsibility for the CanadaLogin website in `#cl-website`, so that
questions have a clear owner rather than being addressed to the channel at
large.

Every Monday morning, the current ATC is announced in `#cl-website`.

## Upcoming schedule

Regenerated every Monday, and whenever a swap or time off is recorded. It
reflects known time off and swaps, so it can change if someone books leave.

<!-- schedule:start -->

| Week | ATC |
| --- | --- |
| Aug 31 – Sep 4, 2026 | Afonso |
| Sep 7 – Sep 11, 2026 | Cheyenne |
| Sep 14 – Sep 18, 2026 | Melody |
| Sep 21 – Sep 25, 2026 | Sami |
| Sep 28 – Oct 2, 2026 | Afonso |
| Oct 5 – Oct 9, 2026 | Cheyenne |

Updated automatically.
<!-- schedule:end -->

## What the ATC does

For the duration of their week, the ATC is the first point of contact in
`#cl-website`:

- **Answers questions** in the channel, or directs them to someone who can.
- **Triages what comes in** — reproducing, labelling, and opening a GitHub issue
  where something needs to outlive the conversation. Triage is not the same as
  fixing: the ATC decides what happens next, and is not expected to do all of it
  personally.
- **Handles production deploys** for that week.
- **Hands off** anything still open at the end of the week.

The role is not a full-time support desk. Anything that turns out to require
significant effort should be written up as an issue and prioritised alongside
everything else.

## Hours

Coverage is **09:00–17:00 on weekdays, in the ATC's own timezone**. Most of the
team is in Eastern, so when the ATC is not, the Monday post gives the equivalent
Eastern hours:

> :clock11: In Eastern that's **11 a.m. to 7 p.m. EDT**, since @Cheyenne is in MDT.

Some weeks this leaves the start or end of the Eastern day uncovered. That is
expected — messages posted outside the window will be picked up when the ATC's
day begins.

There is no ATC in the evenings or at weekends. This is not an on-call rotation
and there is no pager. Genuine out-of-hours emergencies should follow the normal
incident process instead.

## How the schedule is decided

The roster lives in [rotation.yml](rotation.yml). Nothing is stored about whose
turn it is — it is derived from the calendar, by counting weeks since
`anchor_week` and stepping through the `members` list. Any week can therefore be
recalculated, past or future, and a run that is missed or repeated never shifts
anyone's turn.

To see who has a given week:

```sh
pip install pyyaml
python3 .github/workflows/scripts/rotation.py who --date 2026-09-07
```

To preview the exact Slack message:

```sh
python3 .github/workflows/scripts/rotation.py message --date 2026-09-07
```

Any date works, not just Mondays — it resolves to that date's week.

To print the upcoming weeks as a table:

```sh
python3 .github/workflows/scripts/rotation.py schedule --weeks 12
```

Adding `--write` updates the **Upcoming schedule** table above in place. The
workflow does this every Monday and after each swap, so it is only needed by
hand after editing `rotation.yml` — to publish the change without waiting for
the next run.

## Time off

Add an inclusive date range to `vacations` in [rotation.yml](rotation.yml):

```yaml
vacations:
  - slack_id: U084FJKLE3V
    start: 2026-09-07
    end: 2026-09-18
    note: annual leave
```

If any part of a person's time off overlaps a coverage week, they are skipped
for the **whole** week and it passes to the next person — half a week of cover
is worse than a clean handover. Their place in the rotation is otherwise
unaffected.

Time off should be recorded as far in advance as possible. Monday's run only
sees what is in the file at the time.

## Swapping a week

Swaps are one-offs and do not shift anyone else's turn. Run the
**CanadaLogin Website ATC Rotation** workflow from the Actions tab with:

- `week` — the Monday of the week being swapped
- `slack_id` — the member ID of whoever is taking it

The workflow records the swap in
[rotation-overrides.yml](rotation-overrides.yml), which wins over the computed
rotation for that week only. An override for the current week re-announces in
the channel; one for a future week is recorded quietly.

`rotation-overrides.yml` can be edited by hand instead, but the workflow checks
that the Slack ID is actually on the roster, which is easy to get wrong.

## Joining or leaving

Add or remove an entry under `members` in [rotation.yml](rotation.yml). Note
that changing the length or order of that list re-derives everyone's future
turn, so the upcoming order will shift. Verify the result before merging:

```sh
for d in 2026-09-07 2026-09-14 2026-09-21 2026-09-28; do
  python3 .github/workflows/scripts/rotation.py who --date "$d"
done
```

Do not change `anchor_week` to correct an ordering — reorder `members` instead.
Moving the anchor reshuffles every week, past and future.

`slack_id` must be a Slack **member ID** (Profile → ⋮ → Copy member ID), not an
`@handle`. Handles change; IDs don't. A wrong ID fails silently: the post shows
a literal `<@U0123ABC>` and the person is never notified.

`timezone` must be an IANA identifier such as `America/Toronto` or
`America/Yellowknife` — not an abbreviation like `EST`. Use the identifier for
where the person actually is, even if two regions happen to share the same rules
today, so that it remains correct if they later diverge.

## Files

| File | Purpose |
| --- | --- |
| [rotation.yml](rotation.yml) | Roster, timezones, time off. Edit by PR. |
| [rotation-overrides.yml](rotation-overrides.yml) | One-off swaps. Written by the workflow. |
| [workflows/atc-rotation.yml](workflows/atc-rotation.yml) | Monday cron, manual runs, swaps. |
| [workflows/scripts/rotation.py](workflows/scripts/rotation.py) | `who` / `message` / `swap`. |

## If the Monday post doesn't appear

Check the workflow run in the Actions tab first. Common causes:

- **Everyone is on vacation that week** — the script fails loudly rather than
  picking someone who is away.
- **The webhook secret is missing or rotated** — the post step will fail.
- **The repository is inactive.** GitHub disables scheduled workflows in repos
  with no activity for 60 days. Re-enable it in the Actions tab.

Scheduled runs are queued rather than punctual, so the post can be anywhere from
a few minutes to an hour late when GitHub is busy. The cron is set to 13:00 UTC,
which is 09:00 Eastern in summer and 08:00 Eastern in winter — GitHub cron has
no timezone support, so it drifts with daylight saving.
