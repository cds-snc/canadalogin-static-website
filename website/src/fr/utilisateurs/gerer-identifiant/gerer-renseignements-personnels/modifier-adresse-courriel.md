---
title: Modifier votre adresse courriel
translationKey: changeyouremailaddress
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: changeYourEemailAddressFR
  title: Modifier votre adresse courriel
  locale: fr
  order: 3
  parent: manageYourPersonalInformationFR
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['modifier-adresse-courriel'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
