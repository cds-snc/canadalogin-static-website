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

{% set wpPage = articles_en['problems-entering-and-verifying-your-email'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}

