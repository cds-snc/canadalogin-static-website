---
title: Problème lié à l’inscription
translationKey: troublesigningup
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: troubleSigningUpFR
  title: Problème lié à l’inscription
  locale: fr
  parent: usersFR
  order: 2
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['problemes-inscription'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}