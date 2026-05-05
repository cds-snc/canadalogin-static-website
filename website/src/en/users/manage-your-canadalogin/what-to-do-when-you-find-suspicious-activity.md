---
title: What to do when you find suspicious activity
translationKey: whattodowhenyoufindsuspiciousactivity
layout: 'layouts/base.njk'
eleventyNavigation:
  key: whatToDoWhenYouFindSuspiciousActivityEn
  title: What to do when you find suspicious activity
  locale: en
  order: 6
  parent: manageYourAccountEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['what-to-do-when-you-find-suspicious-activity'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}