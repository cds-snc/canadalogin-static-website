---
title: Integrating your Relying Party
translationKey: integrateyourrelyingparty
layout: 'layouts/base.njk'
eleventyNavigation:
  key: integrateYourRelyingPartyEn
  title: Integrating your Relying Party
  locale: en
  order: 3
  parent: openidConnectionProtocolEn
---

# Integrating your Relying Party

This document describes the integration process between a Relying Party and CanadaLogin.

## Information Required from Relying Party Test
You must provide the following information so that the GC Sign-in team can correctly configure your access to the GC Sign-in. Please send this information to canadalogin.connexioncanada@servicecanada.gc.ca.

> Note: This contact information is pending review by the team.

* Service provider name : as you would like it to appear in the GC Sign-in cinematic.

* Your service URL : Your service provider's page displaying the GC Sign-in button.

* Login Redirect URLs : A comprehensive list of login redirect URLs for your service provider's instance that may be called at the end of the GC Sign-in login process. If your list contains multiple domain names or subdomains—that is, everything between "https://" and the first "/"—you must provide a URL in the field sector_identifier.

* ??? Logout Endpoint : single logout settings still to be defined. we support Front Channel/Back Channel???
* ??? Post-Logout redirect URLs : post-Logout redirect URLs from your service provider which can be called at the end of the GC Sign-in logout.

* IP addresses : IP addresses leaving your system, visible to GC Sign-in.


## What You'll Receive

After providing the required information, the GC Sign-in team will provide you the following information via encrypted email:

* client ID
* client secret
* GC Sign-in Core profile link: Allows users to manage their Core profile from GC Sign-in when integrated into your application
* openid connect well-known configration endpoint. This endpoint contains the following information:
    1. Authorization endpoint URL
    1. Token endpoint URL
    1. User Info endpoint URL
    1. JSON Web Key Set (JWKS) endpoint URL
* Set the Scope value to openid. You can include additional scope as required by your application. GC Sign-in supports the following scopes:
    1. profile: This scope value requests access to the name, family_name, given_name and preferred_username claims.
    2. email: This scope value requests access to the email and email_verified claims.
    3. phone: This scope value requests access to the phone_number and phone_number_verified claims.

## Avaiable User Info Claims list
Here are the user info claims available during the GC Sign-in pilot:

* `uid` - Unique identifier
* `preferred_username` - Preferred username
* `groupIds` - Group identifiers
* `name` - Full name
* `realmName` - Realm name
* `given_name` - First name
* `tenantId` - Tenant identifier
* `mobile_number` - Mobile phone number
* `upn` - User principal name
* `email` - Email address
* `family_name` - Last name
* `iss` - Token issuer
* `acr` - Authentication context class reference
* `amr` - Authentication Methods Reference
* `locale` - Preferred language 

## Reference the following links for GC Sign-in envrionment links and endpoints

{% link links.implementationofopenidconnect 'GC Sign-in Implementation of OpenID Connect' %}    


