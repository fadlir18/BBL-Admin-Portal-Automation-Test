describe('Audit Search - Search by Account ID but not found', function () {
  it('Audit Search - Search by Account ID but not found', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(1) > .btn').click()

    //Filtering
    cy.get('#acctId').click().type('0123456789')
    cy.get('#yt-user-search-btn').click()

    //Validating data result
    cy.get('[style="margin-top: 20px; text-align: center;"] > h4').contains('No Results')

  })
})