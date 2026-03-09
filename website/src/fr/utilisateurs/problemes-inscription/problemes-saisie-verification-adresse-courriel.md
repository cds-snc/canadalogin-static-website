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

{% set wpPage = articles_fr['problemes-lies-a-la-saisie-et-a-la-verification-de-votre-adresse-courriel'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}
