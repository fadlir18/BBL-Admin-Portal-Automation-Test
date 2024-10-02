describe('Logout', function () {
    it('Logout', function () {
        cy.login('mobilis', 'Mobilis123?')
        cy.title().should('be.equal', 'Update Details')
        cy.wait(1000)
        cy.logout()
    })

})