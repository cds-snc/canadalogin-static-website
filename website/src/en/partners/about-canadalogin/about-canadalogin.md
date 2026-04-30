---
title: About CanadaLogin
translationKey: aboutcanadalogin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: aboutcanadaloginEN
  title: About
  parent: partnersEN
  locale: en
  order: 1
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_en['about-canadalogin'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}