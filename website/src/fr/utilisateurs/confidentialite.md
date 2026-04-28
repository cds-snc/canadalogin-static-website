---
title: Avis de confidentialité
translationKey: privacynoticeusers
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: privacynoticeusersFR
  title: Avis de confidentialité
  parent: usersFR
  locale: fr
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['avis'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}