---
title: Accord sur les niveaux de service
translationKey: sla
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: slaFR
  title: Accord sur les niveaux de service
  parent: partnersFR
  locale: fr
  hideMain: true
templateEngineOverride: njk
---

<gcds-grid columns="minmax(0, 1fr)" columns-desktop="320px minmax(0, 1fr)" tag="div" container="xl" alignment="center">
    <gcds-side-nav class="hide-on-mobile">
        <gcds-nav-group
            menu-label="Resources"
            open-trigger="Resources"
            open
        >
            <gcds-nav-link href="{{ links.termsofuseFR }}">Conditions d’utilisation</gcds-nav-link>
            <gcds-nav-link href="{{ links.slaFR }}" current>Accord sur les niveaux de service</gcds-nav-link>
        </gcds-nav-group>
    </gcds-side-nav>
    <main id="mc" class="general-layout" data-pagefind-body>

        {% set articlePage = articles_fr['accord-niveaux-service'] %}

        {% if articlePage %}
          <h1>{{ articlePage.title.rendered | safe }}</h1>
          {{ articlePage.content.rendered | safe }}
        {% endif %}

    </main>
</gcds-grid>
