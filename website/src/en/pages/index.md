---
title: GC Sign in Help Centre
layout: 'layouts/home.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

# Who is {{ homehero[locale].signIn }} for?

<!-- <section>
    <gcds-heading tag="h1" character-limit="false" margin-bottom="300">
      Who is GC Sign in for?
    </gcds-heading>
</section>

<h2 class="my-450">Who is GC Sign in for?</h2> -->
<section>
    <gcds-grid tag="ul" columns-desktop="1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
        <li class="list-none">
        <!-- <img class="mb-150" src="../../images/common/home/icon-components.svg" alt=""> -->
        <p><i class="fa-solid fa-people-group fa-4x"></i></p>
        <h3 class="mt-0">Individuals and organizations</h3>
        <p>Discover how GC Sign in works, what services it connects to, and how it helps simplify your access to Government of Canada programs and services.</p>
        <!-- <p><gcds-link href="/en/individuals-and-organizations/" class="hydrated">Learn more</gcds-link></p> -->
        {% link links.individualsorgs 'Learn more →' %}
        </li>
        <li class="list-none">
        <!-- <img class="mb-150" src="../../images/common/home/icon-components.svg" alt=""> -->
        <p><i class="fa-brands fa-canadian-maple-leaf fa-4x"></i></p>
        <h3 class="mt-0">Federal departments</h3>
        <p>Protect your users’ information with the highest standards of digital security and user experience. GC Sign in handles software development, security operations, and end-user support so you don’t have to.</p>
        <!-- <p><gcds-link href="/en/federal-departments/" class="hydrated">Become a partner</gcds-link></p> -->      
        <p>{% link links.federaldepartments 'Become a partner →' %}</p>
        </li>
    </gcds-grid>
</section>

<!-- # {{ homehero[locale].signIn }} Help Centre

## Getting started with {{ homehero[locale].signIn }}
How to create your account. Learn about authentication options and account features.

{% link links.getstarted 'Get started →' %}     
### How can we help?
<section class="mb-1000">
    <gcds-grid columns="repeat(auto-fit, minmax(200px, 450px))">
        <p><gcds-card card-title="Trouble signing up" href="{{ links.troublesigningup }}" description="Can’t verify your email? Not sure what makes a strong password? We’ll help you resolve account-creation issues." card-title-tag="h4"></gcds-card></p>
        <p><gcds-card card-title="Trouble signing in" href="{{ links.troublesigningin }}" description="Forgot your password? Locked out of your account? We’ll help you resolve access issues." card-title-tag="h4"></gcds-card></p>
        <p><gcds-card card-title="Managing your GC Sign in account" href="{{ links.manageyouraccount }}" description="Change your account settings including your password, phone number, email and more." card-title-tag="h4"></gcds-card></p>
        <p><gcds-card card-title="OpenID Connection Protocol" href="{{ links.openidconnectionprotocol }}" description="General information about OpenID Connection Protocol" card-title-tag="h4"></gcds-card></p>
    </gcds-grid>
</section> -->
