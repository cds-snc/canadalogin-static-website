---
title: Privacy notice statement
translationKey: privacynoticepartners
layout: 'layouts/base.njk'
eleventyNavigation:
  key: privacyNoticePartnersEN
  title: Privacy Notice
  parent: partnersEN
  locale: en
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['privacy'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
