---
title: Articles EN POC
layout: 'layouts/base.njk'
translationKey: articles
date: 'git Last Modified'
templateEngineOverride: njk
---


{% set articlePage = articles_en['articles'] %}
<h2>EN Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}