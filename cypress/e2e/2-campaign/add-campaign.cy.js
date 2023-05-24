describe('add campaign', function() {
	it('add campaign', function () {

		cy.login('QATester','OttoDigital2023!')
		cy.title().should('be.equal','Superindo CMS')
	
		// Add campaign
		cy.wait(5000)
		cy.get('div.uk-grid-margin > .uk-button').click()
		cy.get('#form-stacked-text').click()
		cy.get('#form-stacked-text').type('Automation - Testing add campaign', { delay: 50 })
		cy.get('.uk-button-danger').click()
	
		// Validating url is right
		cy.get('.uk-margin-top > #modal-example > .uk-modal-dialog > .uk-text-center > .red').click()
		cy.url().should('include', '/admin/campaign/campaigns/')
	
		// Validating campaign on the first page of the table
		cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()
		cy.wait(2000)
		cy.get('tbody > :nth-child(1) > :nth-child(3)').scrollIntoView().should('contain', 'Automation - Testing add campaign')
	
	})
})
