describe('Search user by financial institutions', function () {
  it('Search user by financial institutions', function () {
    cy.login('mobilis', 'Mobilis123?')
    
    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(6) > .btn').click().wait(3000)

    //Filtering
    cy.get('#fiid').select('Default FIID')

  })
})