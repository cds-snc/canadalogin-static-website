---
title: Get started with CanadaLogin
translationKey: getstarted
layout: 'layouts/base.njk'
eleventyNavigation:
  key: getStartedEn
  title: Get started with CanadaLogin
  locale: en
  parent: usersEN
  hideMain: true
templateEngineOverride: njk
---

{% set wpPage = articles_en['get-started-with-canadalogin'] %}

{% if wpPage %}
  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}
