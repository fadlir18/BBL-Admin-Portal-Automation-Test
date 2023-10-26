describe('filtering by offer id', function() {
	it('filtering by offer id', function () {
		
		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()

		//Filtering
		cy.wait(2000)
		cy.get('.uk-padding-remove-left > .uk-inline > .uk-input').click().type('001/25/10/2023', { delay: 50 })
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()
		cy.get('tbody > tr > :nth-child(2)').should('contain', '001/25/10/2023')
		
	})
})