---
title: Articles FR POC - Emma
layout: 'layouts/base.njk'
translationKey: emma
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['emma-test-page'] %}
<h2>FR Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}