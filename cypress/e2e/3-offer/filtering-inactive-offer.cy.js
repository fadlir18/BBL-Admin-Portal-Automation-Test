describe('filtering inactive offer', function() {
	it('filternig inactive offer', function () {
		
		cy.login('QATester','OttoDigital2023!')
		cy.title().should('be.equal','Superindo CMS')
	
	// Filtering
		cy.wait(2000)
		cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
		cy.wait(1000)
		cy.get('.uk-width-expand').scrollIntoView()
		cy.get('.uk-width-expand').select('Inactive').should('have.value', '3')
	
	// Validate the result
		cy.wait(1000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()
		cy.wait(1000)
		cy.get('tbody > tr > :nth-child(13)').scrollIntoView().should('contain', 'Inactive')
	})
})