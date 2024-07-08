describe('Logout', function() {
    it('Logout', function() {
        cy.login('rebradeuweleu-19501','Order66!!!')
        cy.title().should('be.equal','Admin Management System')
        cy.wait(1000)
        cy.logout()
    })

})