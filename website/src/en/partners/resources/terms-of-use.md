---
title: Terms of use
translationKey: termsofuse
layout: 'layouts/base.njk'
date: 'git Last Modified'
eleventyNavigation:
  key: termsofuseEN
  title: Terms of use
  parent: partnersEN
  locale: en
  hideMain: true
templateEngineOverride: njk
---
<!-- <gcds-grid columns="minmax(0, 1fr)" columns-desktop="320px minmax(0, 1fr)" tag="div" container="xl" alignment="center" class="xl:px-0 sm:px-600 px-225 general-layout"> -->
<gcds-grid columns="minmax(0, 1fr)" columns-desktop="320px minmax(0, 1fr)" tag="div" container="xl" alignment="center">
    <gcds-side-nav>
        <gcds-nav-group
            menu-label="Resources"
            open-trigger="Resources"
            open
        >
            <gcds-nav-link href="{{ links.termsofuse }}" current>Terms of use</gcds-nav-link>
            <gcds-nav-link href="{{ links.sla }}" >Service-level agreement</gcds-nav-link>
        </gcds-nav-group>
    </gcds-side-nav>
    <main id="mc" class="general-layout" data-pagefind-body>

        {% set articlePage = articles_en['terms-of-use'] %}

        {% if articlePage %}
        <h1>{{ articlePage.title.rendered | safe }}</h1>
        {{ articlePage.content.rendered | safe }}
        {% endif %}

    </main>
</gcds-grid>
