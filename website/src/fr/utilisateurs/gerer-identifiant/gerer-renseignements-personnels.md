---
title: Gérer vos renseignements personnels
translationKey: manageyourpersonalinformation
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: manageYourPersonalInformationFR
  title: Gérer vos renseignements personnels
  locale: fr
  order: 4
  parent: manageYourAccountFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['gerer-renseignements-personnels'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}