---
title: Services utilisant ConnexionCanada
translationKey: participatingservices
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: participatingServicesFR
  title: Services utilisant ConnexionCanada
  locale: fr
  parent: whatiscanadaloginFR
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['services-participants'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
