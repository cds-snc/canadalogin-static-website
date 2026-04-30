---
title: Qu’est-ce que ConnexionCanada?
translationKey: whatiscanadalogin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: whatiscanadaloginFR
  title: À propos
  locale: fr
  parent: usersFR
  order: 4
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_fr['a-propos'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}

