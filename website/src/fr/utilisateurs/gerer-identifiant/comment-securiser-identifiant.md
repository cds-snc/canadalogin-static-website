---
title: Comment sécuriser votre identifiant
translationKey: howtokeepyourcanadaloginsecure
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: howToKeepYourCanadaLoginSecureFR
  title: Comment sécuriser votre identifiant
  locale: fr
  order: 5
  parent: manageYourAccountFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['comment-securiser-identifiant'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}