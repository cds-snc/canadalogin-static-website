---
title: CanadaLogin roadmap
translationKey: signinroadmap
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: signinroadmapEN
  title: Roadmap
  locale: en
  parent: partnersEN
  order: 2
  hideMain: false
templateEngineOverride: njk
---

{% set wpPage = articles_en['roadmap'] %}

{% if wpPage %}
    <h2>Articles content </h2>

  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}
