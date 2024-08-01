describe('Search user by email', function () {
  it('Search user by email', function () {
    cy.login('mobilis', 'Mobilis123?')
    
    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(3) > .btn').click().wait(3000)

    //Filtering
    cy.get('#roleName').select('Administrator Role')
    cy.get('#yt-user-search-btn').click()

  })
})