---
title: À propos de Connexion GC
translationKey: aboutgcsigninFR
layout: 'layouts/base.njk'
eleventyNavigation:
  key: aboutgcsigninEN
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
À terme, Connexion GC prendra en charge d’autres options d’authentification multifacteur, y compris les clés d’accès, les clés de sécurité et les applications d’authentification.    </gcds-text>
    <gcds-text>
      Additionally, later versions may support signing in with external credential service providers such as provincial and territory digital identities.
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_support.svg" alt="">     
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Self-managed account recovery
    </gcds-heading>
    <gcds-text>
      Users can reset a lost password by verifying with a code sent to their email and another sent to their phone. If they lose access to their phone number, they can recover it through a code sent to the user’s email and a backup verification method. 
    </gcds-text>
    <gcds-text>
      However, accounts cannot be recovered if the email address is forgotten.
    </gcds-text>
  </div>
  <div style="">
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_knowledgebase.svg" alt="">
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      User profile
    </gcds-heading>
    <gcds-text>
      A user’s profile includes basic information like their name, email, phone number, and language preference.
    </gcds-text>
    <gcds-text>
      Users can manage their profile and authenticators by adding, editing, or removing them at any time. Any updates made will be shared with the service they’re signing into. Partners will need the authority to collect personal information.
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_profile.svg" alt="">
  </div>
</gcds-grid>

## What’s coming next

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <div>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Credential assurance level 3
    </gcds-text>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Identity assurance level 2
    </gcds-text>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Access management
    </gcds-text>
    <gcds-text>
      <i class="fa-solid fa-arrow-right"></i> &nbsp; Enhanced fraud management
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_authentication.svg" alt="">
  </div>
</gcds-grid>

<gcds-button type="link" button-role="secondary" value="View the roadmap" href="/en/partners/roadmap">
  View the roadmap
</gcds-button>

## Technical specifications

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Availability
    </gcds-heading>
    <gcds-text>
      GC Sign in is committed to working collaboratively to provide timely resolution of issues including responding to support requests and inquiries during regular business hours (9am to 5pm Eastern Time).
    </gcds-text>
  </div>
  <div>
    <gcds-heading tag="h3">
      Capacity
    </gcds-heading>
    <gcds-text>
      The production environment currently has capacity to authenticate up to 12 users per second (43,200 per hour).
    </gcds-text>
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Performance
    </gcds-heading>
    <gcds-text>
      The performance target for the production environment is to respond to 95% of HTTP requests within 200 milliseconds or less, and to respond to 99% of HTTP requests within 500 milliseconds or less.
    </gcds-text>
  </div>
  <div>
    <gcds-heading tag="h3">
      Data backup and recovery
    </gcds-heading>
    <gcds-text>
      All user data and all configuration data of the service data is backed up once per hour, every hour to geographically redundant storage, with a durability of at least 99.9999% over a given year.
    </gcds-text>
  </div>
</gcds-grid>

<gcds-grid tag="div" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" align-items="center">
  <div>
    <gcds-heading tag="h3">
      Security
    </gcds-heading>
    <gcds-text>
      Offers identity assurance level 1 and credential assurance level 2. This means you can safely provide your clients access to manage, submit, and store information rated at Protected B, Medium Integrity, Medium Availability (PBMM).
    </gcds-text>
  </div>
</gcds-grid>

## About the GC Sign in team

<gcds-text>
  GC Sign in is developed by the Canadian Digital Service (CDS). CDS is part of <gcds-link href="https://www.canada.ca/en/employment-social-development.html">Employment and Social Development Canada (ESDC)</gcds-link>. We aim to advance the goals of the <gcds-link href="https://www.canada.ca/en/government/system/digital-government/government-canada-digital-operations-strategic-plans/canada-digital-ambition.html">Digital Ambition</gcds-link> and improve service experiences in the Government of Canada. We build digital products that solve common service problems for departments.
</gcds-text>

<gcds-text>
  Funded through <gcds-link href="https://www.budget.canada.ca/2024/home-accueil-en.html">Budget 2024</gcds-link>, GC Sign in was created to provide a single front door for federal government programs and services. 
</gcds-text>

<gcds-text>
  <gcds-link href="https://digital.canada.ca/about/">
    Learn more about CDS
  </gcds-link>
</gcds-text>
