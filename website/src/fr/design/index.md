---
title: Articles FR POC
layout: 'layouts/base.njk'
translationKey: articles
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---


{% set articlePage = articles_fr['design'] %}
<h2>FR Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}