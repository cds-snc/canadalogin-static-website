---
title: Manage your personal information
translationKey: manageyourpersonalinformation
layout: 'layouts/base.njk'
eleventyNavigation:
  key: manageYourPersonalInformationEn
  title: Manage your personal information
  locale: en
  order: 4
  parent: manageYourAccountEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['manage-your-personal-information'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
