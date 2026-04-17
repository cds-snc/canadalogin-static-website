---
title: Components demonstration page
translationKey: demopage
layout: 'layouts/base.njk'
eleventyNavigation:
  key: demopageEN
  title: Components demonstration page
  parent: partnersEN
  locale: en
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['demo'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
