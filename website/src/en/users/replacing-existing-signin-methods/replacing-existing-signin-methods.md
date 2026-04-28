---
title: Why CanadaLogin is replacing existing sign-in methods
translationKey: replacingsigninmethods
layout: 'layouts/base.njk'
eleventyNavigation:
  key: replacingSigninMethodsEn
  title: Why CanadaLogin is replacing existing sign-in methods
  locale: en
  order: 7
  parent: getStartedEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['replacing-existing-signin-methods'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}