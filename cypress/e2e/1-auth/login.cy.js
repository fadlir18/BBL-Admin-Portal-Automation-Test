/// <reference types="cypress" />

it('login test', function() {
    cy.visit('https://qa-cms.mysuperindo.co.id/login')
        .get(':nth-child(3) > .uk-inline > .uk-input').type('QATester')
        .get('.parent-password-form > .uk-inline > .uk-input').click()
        .get('.parent-password-form > .uk-inline > .uk-input').type('Brilliant77!')
        .get('.uk-button.uk-width-1-1').click()
})