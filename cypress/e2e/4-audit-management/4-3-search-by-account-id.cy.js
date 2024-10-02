describe('Audit Search - Search Account ID', function () {
  it('Audit Search - Search Account ID', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(1) > .btn').click()

    //Filtering
    cy.get('#acctId').click().type('1021')
    cy.get('#yt-user-search-btn').click()

    //Validating data result
    cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('1021')

  })
})