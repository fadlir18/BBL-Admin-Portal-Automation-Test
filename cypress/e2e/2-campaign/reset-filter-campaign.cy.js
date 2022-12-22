/// <reference types="cypress" />

import '../1-auth/login.cy'
it('reset filter campaign', function () {
    cy.wait(1000)
    cy.get('.uk-button.uk-width-1-1').click()
    cy.get('.uk-width-1-5 > .uk-inline > .uk-input').type('Testing 123')
    cy.get('.uk-flex-middleuk-margin-small-left > span').click()
})