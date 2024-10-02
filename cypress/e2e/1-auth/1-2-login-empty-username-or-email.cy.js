describe('Login empty username or email', function () {
    it('Login empty username or email', function () {
        cy.visit('/login')
        cy.get('#password').type('Mobilis123?').wait(3000)
        cy.get('#submitButton').click()
        cy.get('.alert').contains('Invalid username or password!')
    })

})