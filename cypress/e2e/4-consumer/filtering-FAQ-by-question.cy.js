describe("Filtering FAQ by question", function () {
	it("Filtering FAQ by question", function () {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()

		//Filtering
		cy.wait(1500)
		cy.get('.uk-padding-remove > .uk-inline > .uk-input').click().type('Token not found', { delay: 100 })
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()
		cy.get('tbody > tr > :nth-child(3)').should('contain', 'Token not found')
	});
});
