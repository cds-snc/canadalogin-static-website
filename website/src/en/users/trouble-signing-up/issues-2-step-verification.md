---
title: Issues with setting up 2-step verification
translationKey: issuesSettingUp2Fa
layout: 'layouts/base.njk'
eleventyNavigation:
   key: issuesSettingUp2FaEn
   title: 2-step verification
   locale: en
   order: 2
   parent: troubleSigningUpEn
   hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_en['issues-2-step-verification'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}