---
title: Departments and agencies
translationKey: departmentsAgencies
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: partnersEN
  title: Partners
  locale: en
  parent: landingEN
  order: 3
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_en['partners'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}

