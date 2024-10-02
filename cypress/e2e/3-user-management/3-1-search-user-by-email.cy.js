describe('Search user by email', function () {
  it('Search user by email', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(6) > .btn').click()

    //Filtering
    cy.get('#email').click().type('fadlir18@gmail.com')
    cy.get('#yt-user-search-btn').click().wait(1000)
    cy.get('.mob-data-table-row > :nth-child(2)').contains('fadlir18@gmail.com')

    //

  })
})