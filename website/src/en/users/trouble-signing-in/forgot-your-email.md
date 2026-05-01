---
title: Forgot your email
translationKey: forgotyouremail
layout: 'layouts/base.njk'
eleventyNavigation:
  key: forgotYourEmailEn
  title: Forgot your email
  locale: en
  parent: troubleSigningInEn
  order: 2
templateEngineOverride: njk
---

{% set articlePage = articles_en['forgot-your-email'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
