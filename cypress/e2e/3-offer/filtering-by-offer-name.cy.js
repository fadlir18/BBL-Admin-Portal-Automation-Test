describe('filtering by offer id', function() {
	it('filtering by offer id', function () {
		
		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()

		//Filtering
		cy.wait(2000)
		cy.get(':nth-child(2) > .uk-inline > .uk-input').click().type('Downy Parfum Collection 1350ML', { delay: 50 })
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()
		cy.get('tbody > :nth-child(1) > :nth-child(3)').scrollIntoView().should('contain', 'Downy Parfum Collection 1350ML')
	})
})