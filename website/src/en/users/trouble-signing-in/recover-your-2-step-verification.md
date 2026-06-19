---
title: Recover your 2-step verification
translationKey: recoveryour2stepverification
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: recoverYour-2StepVerificationEn
  title: Recover your 2-step verification
  locale: en
  parent: troubleSigningInEn
  order: 1
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['recover-your-2-step-verification'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}
