---
title: Welcome to CanadaLogin
layout: 'layouts/base.njk'
permalink: /en/
translationKey: landing
redirect_from: /
date: 'git Last Modified'
eleventyNavigation:
  key: landingEN
  title: CanadaLogin
  order: 1
templateEngineOverride: njk
---

{% set articlePage = articles_en['en'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}