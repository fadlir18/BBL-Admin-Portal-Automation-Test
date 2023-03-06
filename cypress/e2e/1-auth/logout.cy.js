describe('Logout', function() {
    it('Logout', function() {
        cy.login('QATester','Brilliant77!')
        cy.title().should('be.equal','Superindo CMS')
        cy.wait(3000)
        cy.logout()
    })

})