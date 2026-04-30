---
title: Terms and Conditions
translationKey: termsandconditionspartners
layout: 'layouts/base.njk'
date: 'git Last Modified'
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
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}