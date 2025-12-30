---
title: Implementation of OpenID Connect
translationKey: implementationofopenidconnect
layout: 'layouts/base.njk'
eleventyNavigation:
  key: implementationOfPpenIdConnectEn
  title: Implementation of OpenID Connect
  locale: en
  order: 1
  parent: openidConnectionProtocolEn
---

# GC Sign-in Implementation of OpenID Connect

GC Sign-in implement the OpenID Connect protocol to allow a service provider to delegate to them the identification and authentication of users, as well as the management of consents which are necessary for the transmission of users' personal data to the service provider.

## The actors

As a reminder, the OpenID Connect protocol defines the following actors: User, Relying Party and OpenID Provider.

OpenId Connect involves 3 players:

<table style="width: 50%;">
  <thead>
    <tr style="background-color: var(--gcds-color-blue-100);">
      <th class="b-sm b-dark">OpenID Connect Actor</th>
      <th class="b-sm b-dark">Actor in the GC Sign-in context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="b-sm b-dark">User</td>
      <td class="b-sm b-dark">Service Provider End User</td>
    </tr>
    <tr class="bg-light">
      <td class="b-sm b-dark">Relying Party</td>
      <td class="b-sm b-dark">Service provider</td>
    </tr>
    <tr>
      <td class="b-sm b-dark">OpenID Provider</td>
      <td class="b-sm b-dark">GC Sign-in</td>
    </tr>
  </tbody>
</table>

## OpenID Connect Flow

The OpenID Connect protocol offers different flows for retrieving tokens. GC Sign-in only implements **Authorization code flow** .

## Discovery Mode

The OpenID Connect protocol allows the Identity Provider to expose to Relying Party to dynamically retrieve its configuration data ( meta-data ).

<a href="https://openid.net/specs/openid-connect-discovery-1_0.html" target="_blank" rel="noopener">More information about OpenID Connect Discovery</a>

### GC Sign-in exposes metadata via the following discovery URLs:

<table style="width: 80%;">
  <thead>
    <tr style="background-color: var(--gcds-color-blue-100);">
      <th class="b-sm b-dark">Platform</th>
      <th class="b-sm b-dark">Environment</th>
      <th class="b-sm b-dark">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="b-sm b-dark">GC Sign-in</td>
      <td class="b-sm b-dark">sandbox</td>
      <td class="b-sm b-dark">https://cds-gcsignin-dev.verify.ibm.com/oauth2/.well-known/openid-configuration</td>
    </tr>
    <tr class="bg-light">
      <td class="b-sm b-dark">GC Sign-in</td>
      <td class="b-sm b-dark">stage</td>
      <td class="b-sm b-dark">to be defined</td>
    </tr>
    <tr>
      <td class="b-sm b-dark">GC Sign-in</td>
      <td class="b-sm b-dark">prod</td>
      <td class="b-sm b-dark">to be defined</td>
    </tr>
  </tbody>
</table>

## Token types and formats

GC Sign-in allows you to collect different types of tokens:

<table style="collapse; width: 50%;">
  <thead>
    <tr style="background-color: var(--gcds-color-blue-100);">
      <th class="b-sm b-dark">Token</th>
      <th class="b-sm b-dark">Format</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="b-sm b-dark">access token</td>
      <td class="b-sm b-dark">string of characters</td>
    </tr>
    <tr class="bg-light">
      <td class="b-sm b-dark">id_token</td>
      <td class="b-sm b-dark">JWT</td>
    </tr>
    <tr>
      <td class="b-sm b-dark">user info</td>
      <td class="b-sm b-dark">JSON</td>
    </tr>
  </tbody>
</table>

## Token signing and encryption

In GC Sign-in pilot phase, JWT tokens (ID Token) are only signed, not encrypted. The signature guarantees the integrity of the exchanged data, while confidentiality is maintained through TLS protocol during communications between actors.

Future releases may introduce token encryption to provide additional security features based on business requirements and security assessments.

The specifications of the signature and encryption algorithms used by GC Sign-in are as follows:

- JWA - https://tools.ietf.org/html/rfc7518
- JWS - https://tools.ietf.org/html/rfc7515#appendix-A.3
- JWE - https://tools.ietf.org/html/rfc7516#appendix-A.1

## Signing tokens

The tokens are signed by GC Sign-in using their own signing keys, to allow the service provider to ensure that these two tokens are indeed issued by GC Sign-in. The service provider must therefore verify the signature of the tokens by taking care to retrieve the public signing keys of GC Sign-in.

The signature guarantees the integrity and authenticity of the data exchanged.

### Supported Signature Algorithm

GC Sign-in in pilot phase only supports one asymmetric signature algorithm:

- RS256 (RSA + SHA-256)

<a href="https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.10.1" target="_blank" rel="noopener">More information on symmetric signature in OpenID Connect</a>

### Exhibition of signing keys

The public signature keys for GC Sign-in are changed regularly and are available via the JWKS URL present in the Discovery URL metadata at the following address:

<table style="width: 80%;">
  <thead>
    <tr style="background-color: var(--gcds-color-blue-100);">
      <th class="b-sm b-dark">Platform</th>
      <th class="b-sm b-dark">Environment</th>
      <th class="b-sm b-dark">Endpoint addresses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="b-sm b-dark">GC Sign-in</td>
      <td class="b-sm b-dark">sandbox</td>
      <td class="b-sm b-dark">https://cds-gcsignin-dev.verify.ibm.com/oauth2/jwks</td>
    </tr>
    <tr class="bg-light">
      <td class="b-sm b-dark">GC Sign-in</td>
      <td class="b-sm b-dark">stage</td>
      <td class="b-sm b-dark">to be defined</td>
    </tr>
    <tr>
      <td class="b-sm b-dark">GC Sign-in</td>
      <td class="b-sm b-dark">prod</td>
      <td class="b-sm b-dark">to be defined</td>
    </tr>
  </tbody>
</table>
