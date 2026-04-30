---
title: Problèmes liés à la configuration de la vérification en deux étapes
translationKey: issuesSettingUp2Fa
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
   key: issuesSettingUp2FaFR
   title: Problèmes liés à la configuration de la vérification en deux étapes
   locale: fr
   order: 2
   parent: troubleSigningUpFR
   hideMain: true
templateEngineOverride: njk
---

{% set articlePage = articles_fr['problemes-configuration-verification-deux-etapes'] %}

{% if articlePage %}
  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}