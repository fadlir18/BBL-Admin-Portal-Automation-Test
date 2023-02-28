describe("Filtering consumer by Name", function () {
  it("Filtering consumer by Name", function () {
    //Login
    cy.login("QATester", "Brilliant77!")
    cy.title().should("be.equal", "Superindo CMS")

	//Navigating
	cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
	cy.wait(1500)
	cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

	//Check user name
	.wait(1500)
	cy.get(':nth-child(1) > .uk-inline > .uk-input').click().type('Fadli Rahman', { delay: 50 })
	cy.get('.uk-flex-bottom > .uk-flex-middle').click()

	//Data validation
	cy.get('tbody > :nth-child(1) > :nth-child(2)').scrollIntoView().should('contain', 'Fadli Rahman')
  });
});
