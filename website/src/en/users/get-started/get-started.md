---
title: Get started with CanadaLogin
translationKey: getstarted
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: getStartedEn
  title: Get started with CanadaLogin
  locale: en
  parent: usersEN
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['get-started'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
