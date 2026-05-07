---
title: Gérer la manière dont vous vous connectez
translationKey: managehowyousignin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: manageHowYouSignInFR
  title: Gérer la manière dont vous vous connectez
  locale: fr
  order: 3
  parent: manageYourAccountFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['gerer-methode-connexion'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}