---
title: Terms and Conditions
translationKey: termsandconditionspartners
layout: 'layouts/base.njk'
eleventyNavigation:
  key: termsAndConditionsPartnersEN
  title: Terms and Conditions
  parent: partnersEN
  locale: en
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['terms-and-conditions'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
