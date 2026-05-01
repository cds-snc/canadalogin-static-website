---
title: Manage your CanadaLogin
translationKey: manageyouraccount
layout: 'layouts/base.njk'
eleventyNavigation:
  key: manageYourAccountEn
  title: Manage your CanadaLogin
  locale: en
  parent: usersEN
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['manage-your-canadalogin'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
