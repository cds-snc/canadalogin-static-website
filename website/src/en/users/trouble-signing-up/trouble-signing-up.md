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

{% set wpPage = articles_en['trouble-signing-up'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}
