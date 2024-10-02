describe('View user detail', function () {
  it('View user detail', function () {
      cy.login('mobilis', 'Mobilis123?')

      //Navigating
      cy.get('[href="/management"] > .img-icon').click()
      cy.get(':nth-child(6) > .btn').click().wait(3000)
      cy.get(':nth-child(7) > :nth-child(8) > .dropdown > #dataManagement').scrollIntoView({ duration: 3000 }).click()
      cy.get(':nth-child(7) > :nth-child(8) > .dropdown > .dropdown-menu > :nth-child(1) > a').click()
  })
})