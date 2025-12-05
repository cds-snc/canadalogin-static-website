---
title: À propos de Connexion GC
translationKey: aboutgcsignin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: aboutgcsigninFR
  title: À propos
  parent: partnersFR
  locale: fr
  order: 1
  hideMain: false
---

# À propos de Connexion GC

Connexion GC offre aux utilisateurs et utilisatrices une méthode de connexion unique simple et sécurisée pour accéder aux services gouvernementaux.

## À quoi s’attendre

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Options d’authentification pour la connexion
    </gcds-heading>
    <gcds-text>
      Les utilisateurs et utilisatrices peuvent s’authentifier à l’aide d’un mot de passe et d’un code à usage unique envoyé par SMS ou par appel vocal (niveau d’assurance 2 en matière de justificatifs).
    </gcds-text>
    <gcds-text>
      À terme, Connexion GC prendra en charge d’autres options d’authentification multifacteur, y compris les clés d’accès, les clés de sécurité et les applications d’authentification.    
    </gcds-text>
    <gcds-text>
      De plus, les versions ultérieures pourraient prendre en charge la connexion avec des fournisseurs de justificatifs d’identité externes, tels que les identités numériques provinciales et territoriales.
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_support.svg" alt="">     
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Récupération de compte autogérée
    </gcds-heading>
    <gcds-text>
      Les utilisateurs et utilisatrices peuvent réinitialiser leur mot de passe en cas de perte. Pour ce faire, il leur faut procéder à une vérification à l’aide d’un code reçu par courriel et d’un autre reçu par téléphone. S’ils et elles perdent accès à leur numéro de téléphone, ils et elles peuvent récupérer leur compte grâce à un code envoyé à leur adresse courriel et à une méthode de vérification de secours.  
    </gcds-text>
    <gcds-text>
      Toutefois, il est impossible de récupérer un compte en cas d’oubli de l’adresse courriel qui y est associée.
    </gcds-text>
  </div>
  <div style="">
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_knowledgebase.svg" alt="">
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Profil utilisateur
    </gcds-heading>
    <gcds-text>
      Un profil utilisateur comprend des renseignements de base comme le nom, l’adresse courriel, le numéro de téléphone et la langue de communication.
    </gcds-text>
    <gcds-text>
      Les utilisateurs et utilisatrices peuvent à tout moment gérer leur profil et leurs authentifiants en ajoutant, en modifiant ou en supprimant des éléments. Toute mise à jour réalisée sera communiquée au service auquel les utilisateurs et utilisatrices se connectent. Les partenaires devront avoir l’autorisation de recueillir des renseignements personnels.
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_profile.svg" alt="">
  </div>
</gcds-grid>

## Avancées à venir

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <div>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Niveaux d’assurance 3 en matière de justificatifs
    </gcds-text>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Niveau d’assurance 2 en matière d’identité
    </gcds-text>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Gestion des accès
    </gcds-text>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Gestion améliorée de la fraude
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_authentication.svg" alt="">
  </div>
</gcds-grid>

<gcds-button type="link" button-role="secondary" value="Voir la feuille de route" href="/fr/partenaires/feuille-route">
  Voir la feuille de route
</gcds-button>

## Spécifications techniques

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Disponibilité
    </gcds-heading>
    <gcds-text>
      Connexion GC s’engage à travailler de manière collaborative pour résoudre rapidement des problèmes, notamment en répondant aux questions et aux demandes de soutien durant les heures normales de travail (de 9 h à 17 h, heure de l’Est).
    </gcds-text>
  </div>
  <div>
    <gcds-heading tag="h3">
      Capacité
    </gcds-heading>
    <gcds-text>
      L’environnement de production a actuellement la capacité d’authentifier jusqu’à 12 utilisateurs ou utilisatrices par seconde (soit 43 200 par heure).
    </gcds-text>
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Performance
    </gcds-heading>
    <gcds-text>
      L’objectif de performance pour l’environnement de production est de répondre à 95 % des requêtes HTTP dans un délai de 200 millisecondes ou moins et de répondre à 99 % des requêtes HTTP dans un délai de 500 millisecondes ou moins.
    </gcds-text>
  </div>
  <div>
    <gcds-heading tag="h3">
      Sauvegarde des données et récupération
    </gcds-heading>
    <gcds-text>
      Toutes les données des utilisateurs et utilisatrices et toutes les données de configuration du service sont sauvegardées une fois par heure, toutes les heures, vers des installations de stockage géographiquement redondantes avec une durabilité d’au moins 99,9999 % sur une année donnée.
    </gcds-text>
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" align-items="center">
  <div>
    <gcds-heading tag="h3">
      Sécurité
    </gcds-heading>
    <gcds-text>
      Connexion GC offre un niveau d’assurance 1 en matière d’identité et un niveau d’assurance 2 en matière de justificatifs. Cela signifie que vous pouvez en toute sécurité fournir à votre clientèle un accès pour lui permettre de gérer, de soumettre et de conserver des renseignements classés au niveau PBMM (Protégé B, Intégrité moyenne, Disponibilité moyenne).
      
    </gcds-text>
  </div>
</gcds-grid>

## À propos de l’équipe derrière Connexion GC

<gcds-text>
  Connexion GC est un outil développé par le Service numérique canadien (SNC). Le SNC fait partie d’<gcds-link href="https://www.canada.ca/fr/emploi-developpement-social.html">Emploi et Développement social Canada (EDSC)</gcds-link>. Il cherche à contribuer à la réalisation des objectifs de l’<gcds-link href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/ambition-numerique-canada/ambition-numerique-canada-2022-23.html">Ambition numérique</gcds-link> et à améliorer l’expérience d’utilisation des services du gouvernement du Canada. Nous créons des produits numériques répondant aux problèmes auxquels font généralement face les services ministériels. 
</gcds-text>

<gcds-text>
  Connexion GC est un projet financé par le <gcds-link href="https://www.budget.canada.ca/2024/home-accueil-fr.html">budget de 2024</gcds-link>, visant à offrir une porte d’entrée unique pour les programmes et services du gouvernement fédéral.
</gcds-text>

<gcds-text>[Apprenez-en plus sur le SNC](https://numerique.canada.ca/a-propos/)</gcds-text>
