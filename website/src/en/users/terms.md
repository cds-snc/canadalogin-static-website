---
title: Terms and conditions
translationKey: termsandconditionsusers
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: termsandconditionsusersEN
  title: Terms
  parent: usersEN
  locale: en
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['terms'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}