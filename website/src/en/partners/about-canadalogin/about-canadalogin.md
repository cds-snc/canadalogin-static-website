---
title: About CanadaLogin
translationKey: aboutcanadalogin
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: aboutcanadaloginEN
  title: About
  parent: partnersEN
  locale: en
  order: 1
  hideMain: false
---

# About CanadaLogin

Provides users with a simple, secure, single sign-in method for government services.

## What you can expect

<gcds-grid columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
  <div>
    <gcds-heading tag="h3">
      Sign-in authentication options
    </gcds-heading>
    <gcds-text>
      Users can authenticate using a password and a one time code sent through SMS or voice (<gcds-link href="https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32612" external>credential assurance level 2</gcds-link>).
    </gcds-text>
    <gcds-text>
      CanadaLogin will eventually support other multi-factor authentication options including passkeys, security keys and authenticator applications.
    </gcds-text>
    <gcds-text>
      Additionally, later versions may support signing in with external credential service providers such as provincial and territory digital identities.
    </gcds-text>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_support.svg" alt="">
  </div>
</gcds-grid>

<gcds-grid columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
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

<gcds-grid columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="center">
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

## What’s coming in the future

<gcds-grid columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <div>
    <ul class="list-disc mb-300">
      <li>Credential assurance level 3</li>
      <li>Identity assurance level 2</li>
      <li>Enhanced fraud management</li>
    </ul>
    <gcds-button type="link" button-role="secondary" value="View the roadmap" href="/en/partners/roadmap">
      View the roadmap
    </gcds-button>
  </div>
  <div>
    <img class="mb-150" src="/assets/images/common/partners/about/partners_about_authentication.svg" alt="">
  </div>
</gcds-grid>

## Technical specifications

<gcds-grid class="mt-600" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr" place-items="start">
  <div>
    <gcds-heading margin-top="0" tag="h3">
      Capacity
    </gcds-heading>
    <gcds-text>
      CanadaLogin has a maximum aggregated transaction rate limit of 400 Transactions per second (1,440,000 per hour). Scenarios, such as user login and MFA, performed by the service may consist of multiple transactions.
    </gcds-text>
  </div>
  <div>
    <gcds-heading margin-top="0" tag="h3">
      Data backup
    </gcds-heading>
    <gcds-text>
      All user data and configuration data is backed up daily and data is replicated continuously to redundant storage.
    </gcds-text>
  </div>
  <div>
    <gcds-heading margin-top="0" tag="h3">
      Recovery
    </gcds-heading>
    <gcds-text>
      CanadaLogin is deployed active-active within the same region. A failure of an instance results in an automated switch to another instance (effectively the recovery time being seconds).

      In the event of a full regional outage, Business Continuity and Disaster Recovery (BC/DR) procedures will be initiated. For such an event, the Recovery Time Objective (RTO) is 8 hours and the Recovery Point Objective (RPO) is 24 hours.
    </gcds-text>
  </div>
  <div>
    <gcds-heading margin-top="0" tag="h3">
      Security
    </gcds-heading>
    <gcds-text>
      Offers identity assurance level 1 and credential assurance level 2. This means you can safely provide your clients access to manage, submit, and store information rated at <gcds-link href="https://www.cyber.gc.ca/en/guidance/annex-4a-profile-1-protected-b-medium-integrity-medium-availability-itsg-33" external>Protected B, Medium Integrity, Medium Availability (PBMM)</gcds-link>.
    </gcds-text>
  </div>
</gcds-grid>

## About the CanadaLogin team

<gcds-text>
  CanadaLogin is developed by the Canadian Digital Service (CDS). CDS is part of <gcds-link href="https://www.canada.ca/en/employment-social-development.html" external>Employment and Social Development Canada (ESDC)</gcds-link>. We aim to advance the goals of the <gcds-link href="https://www.canada.ca/en/government/system/digital-government/government-canada-digital-operations-strategic-plans/canada-digital-ambition.html" external>Digital Ambition</gcds-link> and improve service experiences in the Government of Canada. We build digital products that solve common service problems for departments.
</gcds-text>

<gcds-text>
  Funded through <gcds-link href="https://www.budget.canada.ca/2024/home-accueil-en.html" external>Budget 2024</gcds-link>, CanadaLogin was created to provide a single front door for federal government programs and services.
</gcds-text>

<gcds-link display="block" href="https://digital.canada.ca/about/" external>Learn more about CDS</gcds-link>
