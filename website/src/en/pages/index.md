---
title: Welcome to GC Sign in
layout: 'layouts/home.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
eleventyNavigation:
  key: home
  title: Home
  order: 1
date: 'git Last Modified'
hero:
  title: 'Welcome to GC Sign in'
  summary: 'Accessing Government of Canada programs and services is now easier than ever. Use a single, secure sign-in to access all participating federal programs and services.'
  image:
  altText:
---

<!-- # {{ homehero[locale].signIn }} Help Centre -->
<gcds-heading tag="h1" character-limit="false" margin-bottom="300" margin-top="500">
    Who is GC Sign in for?
</gcds-heading>

<!-- {% link links.getstarted 'Get started →' %} -->     
<section>
    <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
        <li class="list-none">
            <p><i class="fa-solid fa-people-group fa-4x"></i></p>
            <h3 class="mt-0">Individuals and organisations</h3>
            <p>Discover how GC Sign in works, what services it connects to, and how it helps simplify your access to Government of Canada programs and services.</p>
            <!-- <p><gcds-link href="users/">Learn more</gcds-link></p> -->
            <p>{% link links.users 'Learn more' %}</p>            
        </li>
        <li class="list-none">
            <p><i class="fa-brands fa-canadian-maple-leaf fa-4x"></i></p>
            <h3 class="mt-0">Departments and agencies</h3>
            <p>Protect your users’ information with the highest standards of digital security and user experience. GC Sign in handles software development, security operations, and end-user support so you don’t have to.</p>
            <!-- <p><gcds-link href="partners/">Become a partner</gcds-link></p> -->
            <p>{% link links.partners 'Become a partner' %}</p>            
        </li>
    </gcds-grid>
</section>
