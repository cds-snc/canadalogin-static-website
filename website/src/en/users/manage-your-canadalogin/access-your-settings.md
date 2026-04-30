---
title: Access your settings
translationKey: accessyoursettings
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: accessYourSettingsEn
  title: Access your settings
  locale: en
  order: 1
  parent: manageYourAccountEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['access-your-settings'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
