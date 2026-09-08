---
title: How your information is shared and stored with services
translationKey: informationsharedstoredservices
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: informationSharedStoredServicesEn
  title: How your information is shared and stored with services
  locale: en
  parent: manageYourAccountEn
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['information-shared-stored-services'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
