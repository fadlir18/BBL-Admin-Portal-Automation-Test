describe('Audit Search - Search by date range but not found', function () {
  it('Audit Search - Search by date range but not found', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(1) > .btn').click()

    //Filtering
    cy.get('.glyphicon').click()
    cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c5"]').click().wait(1000)
    cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(2) > [data-title="r1c6"]').click().wait(1000)
    cy.get('.applyBtn').click()
    cy.get('#yt-user-search-btn').click()

    //Validating data result
    cy.get('[style="margin-top: 20px; text-align: center;"] > h4').contains('No Results')
  })
})