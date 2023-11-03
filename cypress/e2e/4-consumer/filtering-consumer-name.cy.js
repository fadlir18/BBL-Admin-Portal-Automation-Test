describe("Filtering consumer by Name", function () {
	it("Filtering consumer by Name", function () {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

		// Filtering user name
		cy.wait(10000)
		cy.get(':nth-child(1) > .uk-inline > .uk-input').click().type('Fadli Rahman', { delay: 100 })
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()
		cy.wait(10000)

		// Data validation
		cy.get('tbody > :nth-child(1) > :nth-child(2)').scrollIntoView().should('contain', 'Fadli Rahman')
	});
});
