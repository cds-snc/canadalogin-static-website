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
  - Argentine
  - Australie
  - Autriche
  - Biélorussie
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
  - Nigeria
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

# Numéros de téléphones internationaux pris en charge

En raison de limitations techniques, Connexion GC ne prend pas actuellement en charge les numéros de téléphone de tous les pays. Voici une liste des pays dont Connexion GC prend actuellement en charge les numéros de téléphone :

<br />

<gcds-grid columns="repeat(auto-fit, minmax(200px, 250px))">                           
    <ul class="list-disc mb-300">{% for country in countries1 %}<li>{{country}}</li>{% endfor %}</ul>       
    <ul class="list-disc mb-300">{% for country in countries2 %}<li>{{country}}</li>{% endfor %}</ul>  
    <ul class="list-disc mb-300">{% for country in countries3 %}<li>{{country}}</li>{% endfor %}</ul>  
</gcds-grid>