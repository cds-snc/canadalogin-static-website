---
title: Comment se connecter à ConnexionCanada
translationKey: howtosignin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: howToSignInFR
  title: Comment se connecter à ConnexionCanada
  locale: fr
  parent: troubleSigningInFR
  order: 1
templateEngineOverride: njk
---

{% set articlePage = articles_fr['comment-se-connecter'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
