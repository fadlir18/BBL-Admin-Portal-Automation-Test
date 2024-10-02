describe('Login empty password', function () {
    it('Login empty password', function () {
        cy.visit('/login')
        cy.get('#username').type('mobilis').wait(3000)
        cy.get('#submitButton').click()
        cy.get('.alert').contains('Invalid username or password!')
    })

})