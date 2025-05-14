---
title: GC Sign in Help Centre
layout: 'layouts/home.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

# {{ homehero[locale].signIn }} Help Centre

## Getting started with {{ homehero[locale].signIn }}
How to create your account. Learn about authentication options and account features.

{% link links.getstarted 'Get started →' %}     
### How can we help?
<section class="mb-1000">
    <gcds-grid columns="repeat(auto-fit, minmax(200px, 450px))">
        <p><gcds-card card-title="Trouble signing up" href="{{ links.troublesigningup }}" description="Can’t verify your email? Not sure what makes a strong password? We’ll help you resolve account-creation issues." card-title-tag="h4"></gcds-card></p>
        <p><gcds-card card-title="Trouble signing in" href="{{ links.troublesigningin }}" description="Forgot your password? Locked out of your account? We’ll help you resolve access issues." card-title-tag="h4"></gcds-card></p>
        <p><gcds-card card-title="Managing your GC Sign in account" href="{{ links.manageyouraccount }}" description="Change your account settings including your password, phone number, email and more." card-title-tag="h4"></gcds-card></p>
    </gcds-grid>
</section>


