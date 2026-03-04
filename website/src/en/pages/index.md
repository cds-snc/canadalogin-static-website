---
title: Welcome to CanadaLogin
layout: 'layouts/base.njk'
permalink: /en/
translationKey: landing
redirect_from: /
date: 'git Last Modified'
eleventyNavigation:
  key: landingEN
  title: CanadaLogin
  order: 1
templateEngineOverride: njk
---

{% set wpPage = articles_en['welcome-to-canadalogin'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}

