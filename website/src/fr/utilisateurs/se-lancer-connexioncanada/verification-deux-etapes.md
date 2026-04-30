---
title: Qu’est-ce que la vérification en deux étapes?
translationKey: twostepverificationmethods
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: twoStepVerificationMethodsFR
  title: Qu’est-ce que la vérification en deux étapes?
  locale: fr
  order: 2
  parent: getStartedFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['verification-deux-etapes'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}