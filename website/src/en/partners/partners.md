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

{% set wpPage = articles_en['partners'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}




