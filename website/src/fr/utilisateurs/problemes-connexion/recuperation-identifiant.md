---
title: Récupération de votre identifiant
translationKey: recoveryour2stepverification
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: recoverYour-2StepVerificationFR
  title: Récupération de votre identifiant
  locale: fr
  parent: troubleSigningInFR
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['recuperation-identifiant'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
