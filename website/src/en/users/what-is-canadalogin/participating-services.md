---
title: Services using CanadaLogin
translationKey: participatingservices
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: participatingServicesEn
  title: Services using CanadaLogin
  locale: en
  parent: whatiscanadaloginEn
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['participating-services'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
