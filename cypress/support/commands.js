
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login')
    cy.get(':nth-child(3) > .uk-inline > .uk-input').type(username)
    cy.get('.parent-password-form > .uk-inline > .uk-input').click()
    cy.get('.parent-password-form > .uk-inline > .uk-input').type(password)
    cy.get('.uk-fieldset > .uk-button').click()
	  cy.url().should('include', 'https://qa-ecms.mysuperindo.co.id/admin/main-page')
  });

Cypress.Commands.add('logout', () => {
  cy.get('.uk-button').click()
  cy.wait(1000)
	cy.get('.uk-navbar-toggle').click()
  cy.get('.uk-navbar-dropdown > .uk-nav-default > :nth-child(3) > a').click()
  cy.wait(1000)
  cy.get('.uk-text-center > .red').click()
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