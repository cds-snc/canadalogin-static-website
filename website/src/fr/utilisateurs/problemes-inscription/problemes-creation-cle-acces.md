---
title: Problèmes liés à la création d’une clé d’accès
translationKey: problemscreatingpasskey
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: problemsCreatingPasskeyFR
  title: Problèmes liés à la création d’une clé d’accès
  locale: fr
  parent: troubleSigningUpFR
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['problemes-creation-cle-acces'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
