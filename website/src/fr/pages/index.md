---
title: Accueil
layout: 'layouts/home.njk'
permalink: /fr/
translationKey: 'index'
date: 'git Last Modified'
---

<h2 class="py-450">Commencez à utiliser Système de design GC</h2>

<article class="py-450">
  <h2 class="mb-300">Un système de design rien que pour vous</h2>
  <p class="mb-600">Explorez notre outil de conception. <gcds-link href="{{ links.contact }}">Donnez-nous votre avis</gcds-link>.</p>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mb-300">Composants</h3>
      <p class="mb-300">Les blocs de construction de l'interface utilisateur servent différents objectifs.</p>
      <p class="mb-300">Sélectionnez du code réutilisable pour les composants courants et obtenez des conseils relatifs aux meilleures pratiques pour l'infrastructure que vous utilisez.</p>
      <gcds-link href="{{ links.components }}">Découvrez les composants</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-template.svg" alt="" />
      <h3 class="mb-300">Modèles de page</h3>
      <p class="mb-300">Les mises en page réutilisables sont des agencements de composants propres à des types de page communs.</p>
      <p class="mb-300">Entamez votre projet à l’aide de pages de base préfabriquées pour offrir une expérience Canada.ca uniforme et reconnaissable.</p>
      <gcds-link href="{{ links.pageTemplates }}">Découvrez les modèle des page</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mb-300">Unités de style</h3>
      <p class="mb-300">Des décisions en matière d'image de marque et de conception directement intégrées dans le code.</p>
      <p class="mb-300">Découvrez comment les décisions encodées façonnent la conception des services offerts par le gouvernement du Canada et permettent d'offrir une expérience visuelle uniforme.</p>
      <gcds-link href="{{ links.styles }}">Découvrez les unités de style</gcds-link>
    </li>
  </gcds-grid>
</article>

<article class="py-600 bg-light bg-full-width">
  <h2 class="mb-300">Nouveautés</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr">
    <li class="list-none bg-white px-175 py-450 b-radius-md">
      <h3 class="mb-300">
        <gcds-link external href="{{ links.releaseNotes }}">Notes de publication</gcds-link>
      </h3>
      <p>Les derniers ajouts.</p>
    </li>
  </gcds-grid>
</article>
