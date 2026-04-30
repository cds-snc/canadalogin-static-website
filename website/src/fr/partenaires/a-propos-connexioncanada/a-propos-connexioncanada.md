---
title: À propos de ConnexionCanada
translationKey: aboutcanadalogin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: aboutcanadaloginFR
  title: À propos
  parent: partnersFR
  locale: fr
  order: 1
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_fr['avis-partenaires'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}