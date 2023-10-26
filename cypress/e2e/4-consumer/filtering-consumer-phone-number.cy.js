describe("Filtering consumer by Phone number", function () {
	it("Filtering consumer by Phone number", function () {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

		//Input filter
		cy.wait(10000)
		cy.get(':nth-child(2) > .uk-inline > .uk-input').click().type('085884862757', { delay: 50 })
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()

		//Validate data
		cy.wait(5000)
		cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', '085884862757')
	});
});
