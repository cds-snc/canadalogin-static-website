---
title: I forgot my password
translationKey: forgotpassword
layout: 'layouts/base.njk'
eleventyNavigation:
  key: forgotPasswordEn
  title: I forgot my password
  locale: en
  parent: troubleSigningInEn
  order: 1
templateEngineOverride: njk
---

{% set articlePage = articles_en['forgot-your-password'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
