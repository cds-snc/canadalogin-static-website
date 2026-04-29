---
title: Articles EN POC - Andreanne
layout: 'layouts/base.njk'
translationKey: andreanne
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['andreanne-test-page'] %}
<h2>EN Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}