---
title: How to sign out
translationKey: howtosignout
layout: 'layouts/base.njk'
eleventyNavigation:
  key: howToSignOutEn
  title: How to sign out
  locale: en
  order: 7
  parent: manageYourAccountEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['how-to-sign-out'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}