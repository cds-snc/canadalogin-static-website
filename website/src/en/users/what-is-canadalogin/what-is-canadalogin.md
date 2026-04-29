---
title: What is CanadaLogin
translationKey: whatiscanadalogin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: whatiscanadaloginEn
  title: About
  locale: en
  parent: usersEN
  order: 4
  hideMain: false
templateEngineOverride: njk
---
{% set articlePage = articles_en['what-is-canadalogin'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
