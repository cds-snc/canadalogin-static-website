---
title: Problèmes liés à la saisie et à la vérification de votre adresse courriel
translationKey: issuesWithEmail
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: issuesWithEmailFR
  title: Problèmes liés à la saisie et à la vérification de votre adresse courriel
  locale: fr
  order: 2
  parent: troubleSigningUpFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['problemes-saisie-verification-adresse-courriel'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}