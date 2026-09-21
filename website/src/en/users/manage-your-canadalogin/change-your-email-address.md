---
title: Change your email address
translationKey: changeyouremailaddress
layout: 'layouts/base.njk'
eleventyNavigation:
  key: changeYourEmailAddressEn
  title: Change your email address
  locale: en
  order: 3
  parent: manageYourAccountEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['change-your-email-address'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}