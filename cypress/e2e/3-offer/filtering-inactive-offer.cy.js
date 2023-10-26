describe('filtering inactive offer', function () {
	it('filternig inactive offer', function () {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()

		// Filtering
		cy.wait(1000)
		cy.get('.uk-width-expand').scrollIntoView()
		cy.get('.uk-width-expand').select('Inactive').should('have.value', '3')

		// Validate the result
		cy.wait(1000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()
		cy.wait(1000)
		cy.get(':nth-child(1) > :nth-child(13) > [data-v-00bd915c=""] > .label').scrollIntoView({ duration: 5000 }).should('contain', 'Inactive')
	})
})