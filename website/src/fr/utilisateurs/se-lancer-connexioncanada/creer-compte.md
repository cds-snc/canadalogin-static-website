---
title: Comment créer un identifiant ConnexionCanada
translationKey: createAccount
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: createAccountFR
  title: Comment créer un identifiant ConnexionCanada
  locale: fr
  order: 2
  parent: getStartedFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['creer-compte'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}