---
title: Avis
translationKey: termsandconditionspartners
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: termsAndConditionsPartnersFR
  title: Avis
  parent: partnersFR
  locale: fr
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['avis'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
