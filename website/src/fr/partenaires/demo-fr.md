---
title: Page de démonstration des composants
translationKey: demopage
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: demopageFR
  title: Page de démonstration des composants
  parent: partnersFR
  locale: fr
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['demo-fr'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
