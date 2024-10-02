describe('Edit access profiles', function () {
    it('Edit access profiles', function () {
        cy.login('mobilis', 'Mobilis123?')

        //Navigating
        cy.get('[href="/terminals"]').click()
        cy.get(':nth-child(2) > .btn').click().wait(3000)

        //Canceling hange access profile
        cy.get(':nth-child(1) > .col-md-2 > .buttons > .btn').click()
        cy.get('.editable-input').select('Default Mobilis Profile')
        cy.get('.active > .col-md-2 > .form-buttons > .btn-cancel').click()


    })
})