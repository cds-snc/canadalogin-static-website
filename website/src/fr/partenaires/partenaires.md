---
title: Ministères et organismes
translationKey: departmentsAgencies
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: partnersFR
  title: Partenaires
  locale: fr
  parent: landingFR
  order: 3
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_fr['partenaires'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
