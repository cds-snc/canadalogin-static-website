---
title: Que faire si vous détectez une activité suspecte
translationKey: whattodowhenyoufindsuspiciousactivity
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: whatToDoWhenYouFindSuspiciousActivityFR
  title: Que faire si vous détectez une activité suspecte
  locale: fr
  order: 6
  parent: manageYourAccountFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['que-faire-activite-suspecte'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
