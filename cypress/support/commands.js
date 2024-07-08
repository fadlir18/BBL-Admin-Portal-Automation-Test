
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login')
  cy.get('#username').type(username)
  cy.get('#password').click()
  cy.get('#password').type(password)
  cy.get('#submitButton').click()
  cy.wait(3000)
  cy.url().should('include', 'https://admin.test.youtap-azuredev.net/')
});

Cypress.Commands.add('logout', () => {
  cy.get('#yt-left-logout > .img-icon').click()
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