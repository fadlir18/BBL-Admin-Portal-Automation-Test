describe('Login', function() {
    it('Login', function() {
        cy.login('QATester','OttoDigital2023!')
        cy.title().should('be.equal','Superindo CMS')
    })
})