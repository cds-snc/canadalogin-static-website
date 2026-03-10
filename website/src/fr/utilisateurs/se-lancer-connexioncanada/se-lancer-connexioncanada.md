---
title: Se lancer avec ConnexionCanada
translationKey: getstarted
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: getStartedFR
  title: Se lancer avec ConnexionCanada
  locale: fr
  parent: usersFR
  hideMain: true
templateEngineOverride: njk
---

{% set wpPage = articles_fr['se-lancer-avec-connexioncanada'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}
