describe('Login', function() {
    it('Login', function() {
        cy.login('QATester','Brilliant77!')
        cy.title().should('be.equal','Superindo CMS')
    })
})