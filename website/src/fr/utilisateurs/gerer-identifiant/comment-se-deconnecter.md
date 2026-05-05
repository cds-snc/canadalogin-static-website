---
title: Comment se déconnecter
translationKey: howtosignout
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: howToSignOutFR
  title: Comment se déconnecter
  locale: fr
  order: 7
  parent: manageYourAccountFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['comment-se-deconnecter'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}