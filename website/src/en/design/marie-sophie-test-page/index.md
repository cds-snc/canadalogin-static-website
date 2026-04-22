---
title: Articles EN POC - Marie-Sophie
layout: 'layouts/base.njk'
translationKey: marie
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['marie-sophie-test-page'] %}
<h2>EN Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}