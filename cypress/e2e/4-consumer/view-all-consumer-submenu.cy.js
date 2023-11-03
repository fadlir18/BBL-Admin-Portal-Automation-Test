describe('View all consumer', function () {
	it('View all consumer', function () {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)

		//Check submenu
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click().wait(1000)
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click().wait(1000)
		cy.get(':nth-child(5) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()
	})

})