---
title: Articles FR POC - Sukhi
layout: 'layouts/base.njk'
translationKey: sukhi
date: 'git Last Modified'
devOnly: true
eleventyExcludeFromCollections: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['sukhi'] %}
<h2>FR Articles content below:</h2>

{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}