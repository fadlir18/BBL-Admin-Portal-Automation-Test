describe('Audit Search - Search checking pagination', function () {
  it('Audit Search - Search checking pagination', function () {
    cy.login('mobilis', 'Mobilis123?')

    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(1) > .btn').click()

    //Filtering
    cy.get('#yt-user-search-btn').click().wait(1000)

    //Pagination testing
    cy.get('.pagination-sm > :nth-child(4) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(5) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(6) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(7) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(8) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(9) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(9) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(9) > .ng-binding').click().wait(1000)
    cy.get('.pagination-sm > :nth-child(9) > .ng-binding').click().wait(1000)
    cy.get('.pagination-prev > .ng-binding').click().wait(1000)
    cy.get('.pagination-prev > .ng-binding').click().wait(1000)
    cy.get('.pagination-prev > .ng-binding').click().wait(1000)
    cy.get('.pagination-prev > .ng-binding').click().wait(1000)
    cy.get('.pagination-prev > .ng-binding').click().wait(1000)
    cy.get('.pagination-next > .ng-binding').click().wait(1000)
    cy.get('.pagination-next > .ng-binding').click().wait(1000)
    cy.get('.pagination-next > .ng-binding').click().wait(1000)
    cy.get('.pagination-next > .ng-binding').click().wait(1000)
    cy.get('.pagination-next > .ng-binding').click().wait(1000)
    cy.get('.pagination-first > .ng-binding').click().wait(1000)
    cy.get('.pagination-last > .ng-binding').click().wait(1000)
  })
})