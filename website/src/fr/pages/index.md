---
title: Bienvenue sur ConnexionCanada
layout: 'layouts/base.njk'
permalink: /fr/
translationKey: landing
eleventyNavigation:
  key: landingFR
  title: ConnexionCanada
  order: 1
date: 'git Last Modified'
templateEngineOverride: njk
---

{% set wpPage = articles_fr['bienvenue-sur-connexioncanada'] %}
{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}
