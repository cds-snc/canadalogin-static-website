---
title: Updating your sign-in method to CanadaLogin
translationKey: updatingyoursigninmethod
layout: 'layouts/base.njk'
eleventyNavigation:
  key: updatingYourSigninMethodEn
  title: Updating your sign-in method to CanadaLogin
  locale: en
  parent: getStartedEn
  order: 4
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['updating-signin-method'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}