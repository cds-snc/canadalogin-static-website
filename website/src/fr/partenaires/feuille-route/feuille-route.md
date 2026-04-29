---
title: Feuille de route de ConnexionCanada
translationKey: signinroadmap
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: signinroadmapFR
  title: Feuille de route
  locale: fr
  parent: partnersFR
  order: 2
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_en['feuille-route'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}