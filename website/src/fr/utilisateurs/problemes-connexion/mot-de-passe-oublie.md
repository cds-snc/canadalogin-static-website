---
title: Mot de passé oublié
translationKey: forgotpassword
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: forgotPasswordFR
  title: Mot de passé oublié
  locale: fr
  parent: troubleSigningInFR
  order: 1
templateEngineOverride: njk
---

{% set articlePage = articles_fr['mot-de-passe-oublie'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}