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

# GC Sign-In Implementation of OpenID Connect

GC Sign-In implement the OpenID Connect protocol to allow a service provider to delegate to them the identification and authentication of users, as well as the management of consents which are necessary for the transmission of users' personal data to the service provider.


## The actors

As a reminder, the OpenID Connect protocol defines the following actors: User , Relying Party and OpenID Provider .

OpenId Connect involves 3 players:


<table style="border-collapse: collapse; width: 50%;">
  <thead>
    <tr style="background-color: #d9e1f2;">
      <th style="border: 1px solid #000; padding: 8px;">OpenID Connect Actor</th>
      <th style="border: 1px solid #000; padding: 8px;">Actor in the GC Sign-In context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">User</td>
      <td style="border: 1px solid #000; padding: 8px;">Service Provider End User</td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td style="border: 1px solid #000; padding: 8px;">Relying Party</td>
      <td style="border: 1px solid #000; padding: 8px;">Service provider</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">OpenID Provider</td>
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
    </tr>
  </tbody>
</table>



## OpenID Connect Flow

The OpenID Connect protocol offers different flows for retrieving tokens. GC Sign-In only implements **Authorization code flow** .

## Discovery Mode

The OpenID Connect protocol allows the Identity Provider to expose to Relying Party to dynamically retrieve its configuration data ( meta-data ).

<a href="https://openid.net/specs/openid-connect-discovery-1_0.html" target="_blank" rel="noopener">More information about OpenID Connect Discovery</a> 

### GC Sign-In exposes metadata via the following discovery URLs:

<table style="border-collapse: collapse; width: 80%;">
  <thead>
    <tr style="background-color: #d9e1f2;">
      <th style="border: 1px solid #000; padding: 8px;">Platform</th>
      <th style="border: 1px solid #000; padding: 8px;">Environment</th>
      <th style="border: 1px solid #000; padding: 8px;">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
      <td style="border: 1px solid #000; padding: 8px;">sandbox</td>
      <td style="border: 1px solid #000; padding: 8px;">https://cds-gcsignin-dev.verify.ibm.com/oauth2/.well-known/openid-configuration</td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
      <td style="border: 1px solid #000; padding: 8px;">stage</td>
      <td style="border: 1px solid #000; padding: 8px;">to be defined</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
      <td style="border: 1px solid #000; padding: 8px;">prod</td>
      <td style="border: 1px solid #000; padding: 8px;">to be defined</td>
    </tr>


  </tbody>
</table>


## Token types and formats

GC Sign-In allows you to collect different types of tokens:

<table style="border-collapse: collapse; width: 50%;">
  <thead>
    <tr style="background-color: #d9e1f2;">
      <th style="border: 1px solid #000; padding: 8px;">Token</th>
      <th style="border: 1px solid #000; padding: 8px;">Format</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">access token</td>
      <td style="border: 1px solid #000; padding: 8px;">string of characters</td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td style="border: 1px solid #000; padding: 8px;">id_token</td>
      <td style="border: 1px solid #000; padding: 8px;">JWT</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">user info</td>
      <td style="border: 1px solid #000; padding: 8px;">JSON</td>
    </tr>
  </tbody>
</table>



## Token signing and encryption

In GC Sign-In pilot phase, JWT tokens (ID Token) are only signed, not encrypted. The signature guarantees the integrity of the exchanged data, while confidentiality is maintained through TLS protocol during communications between actors.


Future releases may introduce token encryption to provide additional security features based on business requirements and security assessments.


The specifications of the signature and encryption algorithms used by GC Sign-In are as follows:

* JWA - https://tools.ietf.org/html/rfc7518
* JWS - https://tools.ietf.org/html/rfc7515#appendix-A.3
* JWE - https://tools.ietf.org/html/rfc7516#appendix-A.1

## Signing tokens

The tokens are signed by GC Sign-In using their own signing keys, to allow the service provider to ensure that these two tokens are indeed issued by GC Sign-In. The service provider must therefore verify the signature of the tokens by taking care to retrieve the public signing keys of GC Sign-In.

The signature guarantees the integrity and authenticity of the data exchanged.
### Supported Signature Algorithm

GC Sign-In in pilot phase only supports one asymmetric signature algorithm:

* RS256 (RSA + SHA-256)

<a href="https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.10.1" target="_blank" rel="noopener">More information on symmetric signature in OpenID Connect</a>

### Exhibition of signing keys
The public signature keys for GC Sign-In are changed regularly and are available via the JWKS URL present in the Discovery URL metadata at the following address:


<table style="border-collapse: collapse; width: 80%;">
  <thead>
    <tr style="background-color: #d9e1f2;">
      <th style="border: 1px solid #000; padding: 8px;">Platform</th>
      <th style="border: 1px solid #000; padding: 8px;">Environment</th>
      <th style="border: 1px solid #000; padding: 8px;">Endpoint addresses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
      <td style="border: 1px solid #000; padding: 8px;">sandbox</td>
      <td style="border: 1px solid #000; padding: 8px;">https://cds-gcsignin-dev.verify.ibm.com/oauth2/jwks<td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
      <td style="border: 1px solid #000; padding: 8px;">stage</td>
      <td style="border: 1px solid #000; padding: 8px;">to be defined</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; padding: 8px;">GC Sign-In</td>
      <td style="border: 1px solid #000; padding: 8px;">prod</td>
      <td style="border: 1px solid #000; padding: 8px;">to be defined</td>
    </tr>


  </tbody>
</table>



