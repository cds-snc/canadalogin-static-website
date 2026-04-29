---
title: Managing multiple CanadaLogins
translationKey: multipleCanadaLogins
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: multipleCanadaLoginsEn
  title: Managing multiple CanadaLogins
  locale: en
  order: 2
  parent: getStartedEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['managing-multiple-canadalogins'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}