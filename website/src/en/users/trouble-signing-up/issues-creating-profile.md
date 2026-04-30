---
title: Issues with creating a profile
translationKey: creatingprofile
layout: 'layouts/base.njk'
eleventyNavigation:
  key: creatingProfileEn
  title: Issues with creating a profile
  locale: en
  order: 2
  parent: troubleSigningUpEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['issues-creating-profile'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}