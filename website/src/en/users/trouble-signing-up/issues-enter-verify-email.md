---
title: Issues with entering and verifying your email
translationKey: issuesWithEmail
layout: 'layouts/base.njk'
eleventyNavigation:
  key: issuesWithEmailEn
  title: Issues with entering and verifying your email
  locale: en
  order: 2
  parent: troubleSigningUpEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['issues-enter-verify-email'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}