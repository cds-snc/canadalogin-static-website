---
title: Accéder à vos paramètres
translationKey: accessyoursettings
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: accessYourSettingsFR
  title: Accéder à vos paramètres
  locale: fr
  order: 1
  parent: manageYourAccountFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['acceder-parametres'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
