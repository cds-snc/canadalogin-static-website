---
title: Ministères et organismes
translationKey: departmentsAgencies
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: partnersFR
  title: Partenaires
  locale: fr
  parent: landingFR
  order: 3
  hideMain: false
hero:
  title: 'ConnexionCanada pour les ministères et organismes'
  summary: 'Une manière simple et sécurisée d’accéder aux programmes et services en ligne du gouvernement du Canada'
  image: '/assets/images/common/partners/partners_home_gc_signin.svg'
  altText:
templateEngineOverride: njk
---

{% set articlePage = articles_en['partenaires'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}