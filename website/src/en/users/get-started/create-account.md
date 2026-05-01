---
title: How to create a CanadaLogin
translationKey: createAccount
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: createAccountEn
  title: How to create a CanadaLogin
  locale: en
  order: 2
  parent: getStartedEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['create-account'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}