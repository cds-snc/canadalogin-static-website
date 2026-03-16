---
title: Articles EN POC
layout: 'layouts/base.njk'
translationKey: articles
date: 'git Last Modified'
templateEngineOverride: njk
---


{% set wpPage = articles_en['articles'] %}
<h2>EN Articles content below:</h2>

{% if wpPage %}

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}