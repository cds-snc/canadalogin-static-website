---
title: What is 2-step verification?
translationKey: twostepverificationmethods
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: twoStepVerificationMethodsEn
  title: What is 2-step verification?
  locale: en
  order: 2
  parent: getStartedEn
  hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['two-step-verification-methods'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}