---
title: Comment vos renseignements sont transmis aux services et conservés par ces derniers
translationKey: informationsharedstoredservices
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: informationSharedStoredServicesFR
  title: Comment vos renseignements sont transmis aux services et conservés par ces derniers
  locale: fr
  parent: manageYourAccountFR
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['renseignements-transmis-conserves-services'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
