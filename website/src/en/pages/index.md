---
title: Welcome to GC Sign in
layout: 'layouts/base.njk'
permalink: /en/
translationKey: landing
redirect_from: /
date: 'git Last Modified'
eleventyNavigation:
  key: landingEN
  title: GC Sign in
  order: 1
---

# Welcome to GC Sign in

<gcds-text margin-bottom="400">
Accessing Government of Canada programs and services will be easier than ever. Use a single, secure sign-in to access all participating federal programs and services.
</gcds-text>

<!-- # {{ homehero[locale].signIn }} Help Centre -->
<!--
<gcds-heading tag="h2" character-limit="false" margin-bottom="300" margin-top="500">
    Who is GC Sign in for?
</gcds-heading>
-->
<!-- {% link links.getstarted 'Get started →' %} -->
<gcds-grid columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
    <div>
        <!-- <img src="/assets/images/common/home/home_users_icon.svg" style="height: 120px; width: auto;" alt="An icon of 3 people."> -->
        <gcds-heading tag="h2" margin-bottom="200" margin-top="200">
            Individuals and organisations
        </gcds-heading>
        <gcds-text>Discover how GC Sign in works, what services it will connect to, and get support with simplifying your access to Government of Canada programs and services.</gcds-text>
        <gcds-text>{% link links.usersEN 'Get user help' %}</gcds-text>
    </div>
    <div>
        <!-- <img src="/assets/images/common/home/home_partners_icon.svg"  style="height: 120px; width: auto;" alt="An icon showing a hand holding 2 flags and a maple leaf."> -->
        <gcds-heading tag="h2" margin-bottom="200" margin-top="200">
            Departments and agencies
        </gcds-heading>
        <gcds-text>Learn how GC Sign in will protect your users’ information with the highest standards of digital security and user experience. GC Sign in will handle software development, security operations, and end-user support so you don’t have to.</gcds-text>
        <gcds-text>{% link links.partnersEN 'Become a partner' %}</gcds-text>
        <p></p>
    </div>
</gcds-grid>
