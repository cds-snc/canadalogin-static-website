---
title: Home
layout: 'layouts/home.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

<!-- <h2 class="py-450">{{ homehero[locale].signIn }} - One front door for the GC</h2>
<gcds-heading tag="h2">
  Heading
</gcds-heading> -->

<gcds-heading tag="h1">{{ homehero[locale].signIn }} - One front door for the GC</gcds-heading>


<gcds-text>
 {{ homehero[locale].signIn }} is a user-friendly sign in experience
that only requires people to prove their identity once
to access Government of Canada digital services.
</gcds-text>

<gcds-link href="{{ links.contact }}">Contact us to use {{ homehero[locale].signIn }}</gcds-link>

<article class="py-450">

  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mb-300">Authentication</h3>
      <p class="mb-300">Users don’t have to create a new way to sign in, users can sign in with something they already have</p>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-template.svg" alt="" />
      <h3 class="mb-300">Core Profile</h3>
      <p class="mb-300">Saves the hassle of entering the same data again.</p>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mb-300">Identity</h3>
      <p class="mb-300">Departments can have users sign in 
and identity proof without maintaining underlying technology or be concerned about adherence to authentication and identity standards​..</p>
    </li>
  </gcds-grid>
</article>

<article class="py-600 bg-light bg-full-width">
  <h2 class="mb-300">What's new</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr">
    <li class="list-none bg-white px-175 py-450 b-radius-md">
      <h3 class="mb-300">
        <gcds-link external href="{{ links.releaseNotes }}">Release notes</gcds-link>
      </h3>
      <p>Read about the latest additions.</p>
    </li>
  </gcds-grid>
</article>
