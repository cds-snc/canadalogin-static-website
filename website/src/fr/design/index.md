---
title: Articles FR POC
layout: 'layouts/base.njk'
translationKey: articles
date: 'git Last Modified'
devOnly: true
templateEngineOverride: njk
---


{% set articlePage = articles_fr['design'] %}
<h3>Les modifications apportées à l'environnement de test sont limitées à l'environnement de développement. Les pages dont le chemin d'accès commence par /design ne seront pas déployées en production.</h3>
{% if articlePage %}

  <h1>{{ articlePage.title.rendered | safe }}</h1>
  {{ articlePage.content.rendered | safe }}
{% endif %}