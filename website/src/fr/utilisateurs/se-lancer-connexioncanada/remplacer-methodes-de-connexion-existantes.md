---
title: Pourquoi ConnexionCanada remplace les méthodes de connexion existantes
translationKey: replacingsigninmethods
layout: 'layouts/base.njk'
eleventyNavigation:
  key: replacingSigninMethodsFR
  title: Pourquoi ConnexionCanada remplace les méthodes de connexion existantes
  locale: fr
  order: 7
  parent: getStartedFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['remplacer-methodes-de-connexion-existantes'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}