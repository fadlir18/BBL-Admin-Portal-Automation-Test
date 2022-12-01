it.only('login test', function() {

    cy.visit('https://cms.mysuperindo.co.id/')
    cy.get(':nth-child(3) > .uk-inline > .uk-input').type('fadli')
    cy.get('.parent-password-form > .uk-inline > .uk-input').click()
    cy.get('.parent-password-form > .uk-inline > .uk-input').type('Brilliant77!')
    cy.get('.uk-button.uk-width-1-1').click()
})