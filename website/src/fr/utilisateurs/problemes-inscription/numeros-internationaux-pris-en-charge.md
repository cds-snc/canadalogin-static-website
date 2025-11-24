---
title: Numéros de téléphones internationaux pris en charge
translationKey: supportedcountries
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: supportedcountriesFR
  title: Numéros de téléphones internationaux pris en charge
  locale: fr
  order: 2
  parent: issuesSettingUp2FaFR
  hideMain: true
countries1:
  - Argentina
  - Australia
  - Austria
  - Belarus
  - Belgium
  - Brazil
  - Bulgaria
  - Canada
  - Chile
  - Columbia
  - Costa Rica
  - Croatia
  - Denmark
  - Dominican Republic
  - Ecuador
  - Egypt
  - Estonia
  - Finland
  - France
  - Germany
  - Greece
  - Guadeloupe
  - Guatemala
  - Guernsey
  - Hong Kong
  - Hungary
countries2:
  - Iceland
  - India
  - Indonesia
  - Ireland
  - Isle of Mann
  - Israel
  - Italy
  - Jamaica
  - Japan
  - Jersey
  - Kenya
  - Lithuania
  - Luxembourg
  - Macedonia
  - Malaysia
  - Mexico
  - Morocco
  - Netherlands
  - New Zealand
  - Nigeria
  - Norway
  - Oman
  - Pakistan
  - Panama
  - Peru
  - Philippines
countries3:
  - Poland
  - Portugal
  - Puerto Rico
  - Qatar
  - Romania
  - Russia
  - Saudi Arabia
  - Singapore
  - Slovakia
  - South Africa
  - South Korea
  - Spain
  - Sri Lanka
  - Sweden
  - Switzerland
  - Taiwan
  - Thailand
  - Trinidad and Tobago
  - Turkey
  - Ukraine
  - United Kingdom
  - United States
  - Uruguay
  - Uzbekistan
  - Venezuela
  - Vietnam
---

# Numéros de téléphones internationaux pris en charge

En raison de limitations techniques, Connexion GC ne prend pas actuellement en charge les numéros de téléphone de tous les pays. Voici une liste des pays dont Connexion GC prend actuellement en charge les numéros de téléphone :

<br />

<gcds-grid columns="repeat(auto-fit, minmax(200px, 250px))">                           
    <ul class="list-disc mb-300">{% for country in countries1 %}<li>{{country}}</li>{% endfor %}</ul>       
    <ul class="list-disc mb-300">{% for country in countries2 %}<li>{{country}}</li>{% endfor %}</ul>  
    <ul class="list-disc mb-300">{% for country in countries3 %}<li>{{country}}</li>{% endfor %}</ul>  
</gcds-grid>