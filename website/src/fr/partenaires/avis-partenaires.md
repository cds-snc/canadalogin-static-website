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
templateEngineOverride: njk
---

{% set articlePage = articles_fr['avis-partenaires'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
