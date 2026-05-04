---
title: How to sign in to CanadaLogin
translationKey: howtosignin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: howToSignInEn
  title: How to sign in to CanadaLogin
  locale: en
  parent: troubleSigningInEn
  order: 1
templateEngineOverride: njk
---

{% set articlePage = articles_en['how-to-sign-in'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
