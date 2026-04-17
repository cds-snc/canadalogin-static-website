---
title: Avis de confidentialité
translationKey: privacynoticepartners
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: privacyNoticePartnersFR
  title: Confidentialité
  parent: partnersFR
  locale: fr
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['confidentialite'] %}

{% if articlePage %}
    <h2>Articles content </h2>

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
