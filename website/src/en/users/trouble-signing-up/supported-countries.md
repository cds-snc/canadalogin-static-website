---
title: Supported international phone numbers
translationKey: supportedcountries
layout: 'layouts/base.njk'
eleventyNavigation:
  key: supportedcountries
  title: Supported international phone numbers
  locale: en
  order: 2
  parent: issuesSettingUp2FaEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['supported-countries'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}