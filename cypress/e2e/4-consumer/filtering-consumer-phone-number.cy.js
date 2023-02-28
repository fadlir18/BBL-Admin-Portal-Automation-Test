describe("Filtering consumer by Phone number", function () {
  it("Filtering consumer by Phone number", function () {
    //Login
    cy.login("QATester", "Brilliant77!")
    cy.title().should("be.equal", "Superindo CMS")

	//Navigating
	cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
	cy.wait(1500)
	cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

	//Input filter
	.wait(1500)
	cy.get(':nth-child(2) > .uk-inline > .uk-input').click().type('085884862757', { delay: 50 })
	cy.get('.uk-flex-bottom > .uk-flex-middle').click()

	//Validate data
	cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', '085884862757')
  });
});
