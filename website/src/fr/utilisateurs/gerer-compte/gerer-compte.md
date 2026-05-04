---
title: Gérer votre identifiant ConnexionCanada
translationKey: manageyouraccount
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: manageYourAccountFR
  title: Gérer votre identifiant ConnexionCanada
  locale: fr
  parent: usersFR
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['gerer-compte'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
