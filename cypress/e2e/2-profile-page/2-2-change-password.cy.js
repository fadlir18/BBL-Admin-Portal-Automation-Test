describe('Login', function () {
    it('Login', function () {
        cy.login('rebradeuweleu-19501', 'Order66!!!')

        //Navigating
        cy.get('.nav > :nth-child(2) > .btn').click()
        cy.get('h4').contains('Change Password')

        //Changing data
        cy.get(':nth-child(1) > .form-control').click().type('Order66!!!')
        cy.get(':nth-child(2) > .form-control').click().type('Order66!')
        cy.get(':nth-child(3) > .form-control').click().type('Order66!')
        cy.get('.form-group.ng-valid > .btn').click()

        //Relogin
        cy.wait(1000)
        cy.logout()
        cy.login('rebradeuweleu-19501', 'Order66!')

        //Navigating
        cy.get('.nav > :nth-child(2) > .btn').click()
        cy.get('h4').contains('Change Password')

        //Changing data
        cy.get(':nth-child(1) > .form-control').click().type('Order66!')
        cy.get(':nth-child(2) > .form-control').click().type('Order66!!!')
        cy.get(':nth-child(3) > .form-control').click().type('Order66!!!')
        cy.get('.form-group.ng-valid > .btn').click()

        //Logout
        cy.wait(1000)
        cy.logout()
    })
})