/// <reference types="cypress" />

import '../1-auth/login.cy'
it('filtering inactive campaign', function () {
    cy.wait(1000)
    cy.get('.uk-width-expand').scrollIntoView()
    cy.get('.uk-width-expand').select('Inactive').should('have.value', '0')
    cy.wait(2000)
    cy.get('.uk-flex-bottom > .uk-flex-middle').click()
    cy.wait(1000)
    cy.get('.uk-background-muted > tr > :nth-child(9)').scrollIntoView()
    cy.get(':nth-child(1) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
    cy.get(':nth-child(2) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
    cy.get(':nth-child(3) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
    cy.get(':nth-child(4) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
    cy.get(':nth-child(5) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
})