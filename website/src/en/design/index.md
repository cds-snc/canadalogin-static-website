---
title: Articles EN POC
layout: 'layouts/base.njk'
translationKey: articles
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---


{% set articlePage = articles_en['design'] %}
<h3>Sandbox changes are limited to the DEV environment only. Pages with a /design path will not deploy to production.</h3>

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}