---
title: Avis
translationKey: termsandconditionsusers
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: termsandconditionsusersFR
  title: Avis
  parent: usersFR
  locale: fr
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['avis'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}