---
title: Issues creating a password
translationKey: issuesPassword
layout: 'layouts/base.njk'
eleventyNavigation:
   key: issuesPasswordEn
   title: Issues creating a password
   locale: en
   order: 2
   parent: troubleSigningUpEn
   hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['issues-creating-password'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}