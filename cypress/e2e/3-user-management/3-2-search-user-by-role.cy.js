describe('Search user by role', function () {
  it('Search user by role', function () {
    cy.login('mobilis', 'Mobilis123?')
    
    //Navigating
    cy.get('[href="/management"] > .img-icon').click()
    cy.get(':nth-child(6) > .btn').click().wait(3000)

    //Filtering
    cy.get('#roleName').select('Administrator Role')
    cy.get('#yt-user-search-btn').click()

  })
})