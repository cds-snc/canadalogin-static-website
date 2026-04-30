---
title: Numéros de téléphones internationaux pris en charge
translationKey: supportedcountries
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: supportedcountriesFR
  title: Numéros de téléphones internationaux pris en charge
  locale: fr
  order: 2
  parent: issuesSettingUp2FaFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['numeros-internationaux-pris-en-charge'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}