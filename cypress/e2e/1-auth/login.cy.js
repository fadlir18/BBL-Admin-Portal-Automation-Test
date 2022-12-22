it('login test', function() {
    cy.visit('https://qa-cms.mysuperindo.co.id/login')
    cy.get(':nth-child(3) > .uk-inline > .uk-input').type('QATester')
    cy.get('.parent-password-form > .uk-inline > .uk-input').click()
    cy.get('.parent-password-form > .uk-inline > .uk-input').type('Brilliant77!')
    cy.get('.uk-button.uk-width-1-1').click()
})
