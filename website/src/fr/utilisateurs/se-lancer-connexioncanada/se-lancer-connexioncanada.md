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

{% set articlePage = articles_fr['se-lancer-connexioncanada'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
