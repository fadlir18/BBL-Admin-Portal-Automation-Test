describe('Audit Search - Search operator name', function () {
  it('Audit Search - Search operator name', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(1) > .btn').click()

    //Filtering
    cy.get('#yt-user-search-btn').click()
    cy.get('#username').click().type('mobilis')
    cy.get('#yt-user-search-btn').click()

  })
})