---
title: Articles EN POC - Abbie
layout: 'layouts/base.njk'
translationKey: abbie
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['abbie-test-page'] %}
<h2>EN Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}