describe("Filtering FAQ by question", function () {
  it("Filtering FAQ by question", function () {
    //Login
    cy.login("QATester", "Brilliant77!")
    cy.title().should("be.equal", "Superindo CMS")

	//Navigating
	cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
	cy.wait(1500)
	cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()
	.wait(1500)
	cy.get('.uk-padding-remove > .uk-inline > .uk-input').click().type('Test Account Question', { delay: 50 })
	cy.get('.uk-flex-bottom > .uk-flex-middle').click()
	cy.get('tbody > tr > :nth-child(3)').should('contain', 'Test Account Question')
  });
});
