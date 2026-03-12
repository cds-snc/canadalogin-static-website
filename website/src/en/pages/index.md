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
   <gcds-button
        type="link"
        button-role="secondary"
        href="canada.ca"
        lang="en"
      >
        example button
      </gcds-button>
      <gcds-button type="link" button-role="secondary" value="CanadaLogin roadmap" href="roadmap" target="_blank">
  CanadaLogin roadmap
  
</gcds-button>
  <h1>{{ wpPage.title.rendered | safe }}</h1>
  {{ wpPage.content.rendered | safe }}
{% endif %}

