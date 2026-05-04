---
title: Manage how you sign in
translationKey: managehowyousignin
layout: 'layouts/base.njk'
eleventyNavigation:
  key: manageHowYouSignInEn
  title: Manage how you sign in
  locale: en
  order: 3
  parent: manageYourAccountEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['manage-how-you-sign-in'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
