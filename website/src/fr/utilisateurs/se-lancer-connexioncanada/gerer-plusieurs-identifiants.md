---
title: Gérer plusieurs identifiants ConnexionCanada
translationKey: multipleCanadaLogins
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: multipleCanadaLoginsFR
  title: Gérer plusieurs identifiants ConnexionCanada
  locale: en
  order: 2
  parent: getStartedFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['gerer-plusieurs-identifiants'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}