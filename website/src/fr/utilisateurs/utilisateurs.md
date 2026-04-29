---
title: Aide à l’utilisation
translationKey: users
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: usersFR
  title: Aide à l’utilisation
  locale: fr
  parent: landingFR
  order: 1
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_fr['utilisateurs'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}