---
title: Numéros de téléphone internationaux pris en charge
translationKey: supportedPhoneNumbers
layout: 'layouts/base.njk'
eleventyNavigation:
  key: supportedPhoneNumbersFr
  title: Numéros de téléphone internationaux pris en charge
  locale: fr
  order: 2
  parent: issuesSettingUp2FaFr
  hideMain: true
countries1:
  - Argentine
  - Australie
  - Autriche
  - Bélarus
  - Belgique
  - Brésil
  - Bulgarie
  - Canada
  - Chili
  - Colombie
  - Costa Rica
  - Croatie
  - Danemark
  - République dominicaine
  - Équateur
  - Égypte
  - Estonie
  - Finlande
  - France
  - Allemagne
  - Grèce
  - Guadeloupe
  - Guatemala
  - Guernesey
  - Hong Kong
  - Hongrie
countries2:
  - Islande
  - Inde
  - Indonésie
  - Irlande
  - Île de Man
  - Israël
  - Italie
  - Jamaïque
  - Japon
  - Jersey
  - Kenya
  - Lituanie
  - Luxembourg
  - Macédoine
  - Malaisie
  - Mexique
  - Maroc
  - Pays-Bas
  - Nouvelle-Zélande
  - Nigéria
  - Norvège
  - Oman
  - Pakistan
  - Panama
  - Pérou
  - Philippines
countries3:
  - Pologne
  - Portugal
  - Porto Rico
  - Qatar
  - Roumanie
  - Russie
  - Arabie saoudite
  - Singapour
  - Slovaquie
  - Afrique du Sud
  - Corée du Sud
  - Espagne
  - Sri Lanka
  - Suède
  - Suisse
  - Taïwan
  - Thaïlande
  - Trinité-et-Tobago
  - Turquie
  - Ukraine
  - Royaume-Uni
  - États-Unis
  - Uruguay
  - Ouzbékistan
  - Venezuela
  - Vietnam
---

# Numéros de téléphone internationaux pris en charge

En raison de limitations techniques, notre service ne prend actuellement en charge que les numéros de téléphone des pays figurant sur cette liste :

<br />

<gcds-grid columns="repeat(auto-fit, minmax(200px, 250px))">                           
    <ul class="list-disc mb-300">{% for country in countries1 %}<li>{{country}}</li>{% endfor %}</ul>       
    <ul class="list-disc mb-300">{% for country in countries2 %}<li>{{country}}</li>{% endfor %}</ul>  
    <ul class="list-disc mb-300">{% for country in countries3 %}<li>{{country}}</li>{% endfor %}</ul>  
</gcds-grid>