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

{% set articlePage = articles_fr['fr'] %}


{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}