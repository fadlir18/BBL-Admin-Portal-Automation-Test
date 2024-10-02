describe('Audit Search - Search operator name but not found', function () {
  it('Audit Search - Search operator name but not found', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(1) > .btn').click()

    //Filtering
    cy.get('#yt-user-search-btn').click()
    cy.get('#username').click().type('mobilis1234567890', {delay: 100})
    cy.get('#yt-user-search-btn').click()
    cy.get('[style="margin-top: 20px; text-align: center;"] > h4').contains('No Results')

  })
})