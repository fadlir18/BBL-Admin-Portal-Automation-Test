describe('reset filter campaign', function() {
    it('reset filter campaign', function () {
        cy.login('QATester','OttoDigital2023!')
        cy.title().should('be.equal','Superindo CMS')
        cy.wait(1000)
        cy.get('.uk-width-1-5 > .uk-inline > .uk-input').click()
        cy.get('.uk-width-1-5 > .uk-inline > .uk-input').type('Testing 123', { delay: 50 })
        cy.get('.uk-flex-middleuk-margin-small-left > span').click()
    })
})