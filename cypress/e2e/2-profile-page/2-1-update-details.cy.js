describe('Login', function() {
    it('Login', function() {
        cy.login('rebradeuweleu-19501','Order66!!!')

        //Navigating
        cy.get('.nav > :nth-child(1) > .btn').click()
        cy.get('h4').contains('Update Details')

        //Changing data
        cy.get('.btn-info').click().wait(1000)
        cy.get(':nth-child(1) > .editable-wrap > .editable-controls > .editable-input').click().type(1)
        cy.get(':nth-child(2) > .editable-wrap > .editable-controls > .editable-input').click().type(1)
        cy.get('.btn-primary').click()
        cy.get('#editNotes').type('Testing')
        cy.get('.ngdialog-button-primary').click()
    })
})