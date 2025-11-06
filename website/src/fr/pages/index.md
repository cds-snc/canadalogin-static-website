---
title: Bienvenue sur Connexion GC
layout: 'layouts/home.njk'
permalink: /fr/
translationKey: indexFR
eleventyNavigation:
  key: homeFR
  title: Home
  order: 1
date: 'git Last Modified'
hero:
  title: 'Bienvenue sur Connexion GC'
  summary: 'Il n’aura jamais été aussi facile d’accéder aux programmes et services du gouvernement du Canada. Accédez à tous les programmes et services fédéraux participants par le biais d’une connexion unique sécurisée.'
  image: '/assets/images/common/home/home_gc_signin.svg'
  altText: 'An illustrated image depicting a person sitting on a cloud behind a laptop screen that shows it is secure.'
---

<!-- # {{ homehero[locale].signIn }} Help Centre -->
<gcds-heading tag="h2" character-limit="false" margin-bottom="300" margin-top="500">
    Qui utilise Connexion GC?
</gcds-heading>

<!-- {% link links.getstarted 'Get started →' %} -->     
<gcds-grid tag="div" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr">
    <div>
        <img src="/assets/images/common/home/home_users_icon.svg" style="height: 120px; width: auto;" alt="An icon of 3 people.">
        <gcds-heading tag="h3" margin-bottom="200" margin-top="200">
            Individus et entreprises
        </gcds-heading>
        <gcds-text>Découvrez le fonctionnement de Connexion GC ainsi que les services auxquels l’outil donne accès et obtenez de l’aide pour accéder plus facilement aux programmes et services du gouvernement du Canada.</gcds-text>
        <gcds-text>{% link links.usersFR 'Obtenir une aide à l’utilisation' %}</gcds-text>            
    </div>
    <div>
        <img src="/assets/images/common/home/home_partners_icon.svg"  style="height: 120px; width: auto;" alt="An icon showing a hand holding 2 flags and a maple leaf.">
        <gcds-heading tag="h3" margin-bottom="200" margin-top="200">
            Ministères et organismes
        </gcds-heading>
        <gcds-text>Découvrez comment Connexion GC protégera les renseignements de vos utilisateurs et utilisatrices grâce aux normes les plus rigoureuses en matière de sécurité numérique et d’expérience utilisateur. Connexion GC se chargera à votre place du développement logiciel, des opérations de sécurité et du soutien aux utilisateurs finaux et utilisatrices finales.</gcds-text>
        <gcds-text>{% link links.partnersFR 'Devenir partenaire' %}</gcds-text>
        <p></p>
    </div>
</gcds-grid>
