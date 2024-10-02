describe('Greetings and role showing correct data', function () {
    it('Greetings and role showing correct data', function () {
        cy.login('mobilis', 'Mobilis123?')
        cy.get('[href="/terminals"]').click()
        cy.get('[href="/me"]').click().wait(1000)
        
        //Validating data
        cy.get('h4').contains('Welcome mobilis')
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(1)').contains('ADM')
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').contains('Admin')
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').contains('MADM')
    })
})