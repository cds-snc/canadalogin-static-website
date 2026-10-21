/// <reference types="cypress" />

const frLinks = require('../../src/fr/fr.json');

const frBase = '/fr/utilisateurs/gerer-identifiant/';
const frPersonalInfo = `${frBase}gerer-renseignements-personnels/`;
const frCanonical = `${frPersonalInfo}modifier-adresse-courriel/`;
const enPersonalInfo =
  '/en/users/manage-your-canadalogin/manage-your-personal-information/';
const enCanonical = `${enPersonalInfo}change-email-address/`;

describe('Email address pages and redirects', () => {
  for (const url of [frCanonical, enCanonical]) {
    it(`renders the article at ${url}`, () => {
      cy.visit(url);
      cy.location('pathname').should('eq', url);
      cy.get('main h1').should('not.be.empty');
      cy.get('meta[http-equiv="refresh"]').should('not.exist');
    });
  }

  for (const [source, destination] of [
    [`${frPersonalInfo}modifier-addresse-courriel/`, frCanonical],
    [`${frPersonalInfo}modifier-votre-adresse-courriel/`, frCanonical],
    [`${frBase}modifier-addresse-courriel/`, frCanonical],
    [`${enPersonalInfo}change-your-email-address/`, enCanonical],
  ]) {
    it(`redirects ${source} directly to ${destination}`, () => {
      cy.request(source).then(({ body }) => {
        const document = new DOMParser().parseFromString(body, 'text/html');
        expect(
          document.querySelector('link[rel="canonical"]').getAttribute('href'),
        ).to.eq(destination);
        expect(
          document
            .querySelector('meta[http-equiv="refresh"]')
            .getAttribute('content'),
        ).to.include(`url=${destination}`);
        expect(body).to.include(`window.location.replace("${destination}")`);
      });
      cy.visit(source);
      cy.location('pathname').should('eq', destination);
      cy.get('main h1').should('not.be.empty');
    });
  }

  it('uses the corrected French link from personal information navigation', () => {
    expect(frLinks.links.changeyouremailaddressFR).to.eq(frCanonical);
    cy.visit(frPersonalInfo);
    cy.get(`main [href="${frCanonical}"]`).should('exist');
    cy.get('main [href*="modifier-addresse-courriel"]').should('not.exist');
  });
});
