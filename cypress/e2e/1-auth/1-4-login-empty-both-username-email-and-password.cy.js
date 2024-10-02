describe('Login empty both username, email, and password', function () {
    it('Login empty both username, email, and password', function () {
        cy.visit('/login').wait(3000)
        cy.get('#submitButton').click()
        cy.get('.alert').contains('Invalid username or password!')
    })

})