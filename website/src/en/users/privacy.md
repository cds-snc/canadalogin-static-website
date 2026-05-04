---
title: Privacy Notice Statement
translationKey: privacynoticeusers
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: privacynoticeusersEN
  title: Privacy Notice Statement
  parent: usersEN
  locale: en
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['privacy'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}