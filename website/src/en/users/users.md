---
title: Individuals and organisations
translationKey: users
layout: 'layouts/base.njk'
eleventyNavigation:
  key: usersEN
  title: User help
  locale: en
  parent: landingEN
  order: 1
  hideMain: false
templateEngineOverride: njk
---

{% set articlePage = articles_en['users'] %}

{% if articlePage %}
  <h1 character-limit=false>{{ articlePage.title.rendered | safe }}</h1>
  <gcds-heading tag="h1" character-limit=false>
    {{ articlePage.title.rendered | safe }}
  </gcds-heading>
  {{ articlePage.content.rendered | safe }}
{% endif %}