---
title: Adresse courriel oubliée
translationKey: forgotyouremail
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: forgotYourEmailFR
  title: Adresse courriel oubliée
  locale: fr
  parent: troubleSigningInEn
  order: 2
templateEngineOverride: njk
---

{% set articlePage = articles_fr['adresse-courriel-oubliee'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
