---
title: Articles EN POC - Emma
layout: 'layouts/base.njk'
translationKey: emma
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['emma-test-page'] %}
<h2>EN Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}