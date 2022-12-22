/// <reference types="cypress" />

import './login.cy'
it('logout test', function() {
    cy.wait(5000)
    cy.get('.uk-navbar-toggle > img').click()
    cy.get('.uk-navbar-dropdown > .uk-nav-default > :nth-child(2) > a').click()
    cy.get('[data-v-62b040f7=""][data-v-d2cb0d50=""] > #modal-example > .uk-modal-dialog > .uk-text-center > .red').click()
})