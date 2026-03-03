---
title: Trouble signing up here
translationKey: troublesigningup
layout: 'layouts/base.njk'
eleventyNavigation:
  key: updating-your-sign-in-method-to-canadalogin
  title: Trouble signing up
  locale: en
  parent: usersEN
  order: 2
  hideMain: true
templateEngineOverride: njk
---

{% set wpPage = articles['updating-your-sign-in-method-to-canadalogin'] %}

{% if wpPage %}
  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}