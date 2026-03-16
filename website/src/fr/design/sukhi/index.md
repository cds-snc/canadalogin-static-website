---
title: Articles FR POC - Sukhi
layout: 'layouts/base.njk'
translationKey: sukhi
date: 'git Last Modified'
templateEngineOverride: njk
---

{% set wpPage = articles_fr['sukhi'] %}
<h2>FR Articles content below:</h2>

{% if wpPage %}

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}