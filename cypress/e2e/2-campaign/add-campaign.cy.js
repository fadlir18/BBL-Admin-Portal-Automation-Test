describe('add campaign', function() {
	it('add campaign', function () {

		cy.login('QATester','Brilliant77!')
		cy.title().should('be.equal','Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()
	
		// Add campaign
		cy.wait(1000)
		cy.get('div.uk-grid-margin > .uk-button').click()
		cy.wait(1000)
		cy.get('#form-stacked-text').click().type('Automation testing - Add new campaign', { delay: 50 })
		cy.get('.uk-button-danger').click()
		cy.get('.uk-container-expand > :nth-child(1) > #modal-example > .uk-modal-dialog > .uk-text-center > .red').click()

		// Navigating to Table list
		cy.wait(1000)
		cy.get('.uk-flex-between > div > .uk-button').scrollIntoView({ duration: 2000 }).click()
		
	
	})
})
