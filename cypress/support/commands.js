
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login')
    cy.get(':nth-child(3) > .uk-inline > .uk-input').type(username)
    cy.get('.parent-password-form > .uk-inline > .uk-input').click()
    cy.get('.parent-password-form > .uk-inline > .uk-input').type(password)
	cy.get('.uk-button.uk-width-1-1').click()
	cy.url().should('include', 'https://staging-cms.mysuperindo.co.id/admin/campaign/campaigns')
  });

Cypress.Commands.add('logout', () => {
	cy.get('.uk-navbar-toggle > img').click()
	cy.get('.uk-navbar-dropdown > .uk-nav-default > :nth-child(2) > a').click()
	cy.get('[data-v-1dc43ad1=""][data-v-d2cb0d50=""] > #modal-example > .uk-modal-dialog > .uk-text-center > .red').click()
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })