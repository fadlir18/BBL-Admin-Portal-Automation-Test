describe('Search user by email', function () {
  it('Search user by email', function () {
      cy.login('mobilis', 'Mobilis123?')

      //Navigating
      cy.get('[href="/management"] > .img-icon').click()
      cy.get(':nth-child(3) > .btn').click().wait(3000)
      cy.get(':nth-child(7) > :nth-child(2)').click().wait(3000)
      cy.get('.mob-customer-summary > .btn').click()
    
  })
})