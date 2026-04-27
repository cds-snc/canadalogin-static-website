---
title: Mettre à jour votre méthode de connexion pour passer à ConnexionCanada
translationKey: updatingyoursigninmethod
layout: 'layouts/base.njk'
eleventyNavigation:
  key: updatingYourSigninMethodFR
  title: Mettre à jour votre méthode de connexion pour passer à ConnexionCanada
  locale: fr
  parent: usersFR
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set wpPage = articles_fr['mise-a-jour-methode-connexion'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}