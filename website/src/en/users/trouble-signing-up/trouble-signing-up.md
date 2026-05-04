---
title: Trouble signing up here
translationKey: troublesigningup
layout: 'layouts/base.njk'
eleventyNavigation:
  key: troubleSigningUpEn
  title: Trouble signing up
  locale: en
  parent: usersEN
  order: 2
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['trouble-signing-up'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}