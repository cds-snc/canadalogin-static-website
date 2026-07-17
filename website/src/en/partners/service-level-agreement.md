---
title: Service-level agreement
translationKey: sla
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: slaEN
  title: Service-level agreement
  parent: partnersEN
  locale: en
  order: 1
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
            <gcds-nav-link href="{{ links.termsofuse }}">Terms of use</gcds-nav-link>
            <gcds-nav-link href="{{ links.sla }}" current>Service-level agreement</gcds-nav-link>
        </gcds-nav-group>
    </gcds-side-nav>
    <main id="mc" class="general-layout" data-pagefind-body>

        {% set articlePage = articles_en['service-level-agreement'] %}

        {% if articlePage %}
        <h1>{{ articlePage.title.rendered | safe }}</h1>
        {{ articlePage.content.rendered | safe }}
        {% endif %}

    </main>
</gcds-grid>
