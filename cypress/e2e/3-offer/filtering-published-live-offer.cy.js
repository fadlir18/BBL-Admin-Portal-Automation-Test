describe('filtering publisher-live offer', function() {
	it('filternig published-live offer', function () {
	
		cy.login('QATester','Brilliant77!')
		cy.title().should('be.equal','Superindo CMS')
	
	// Filtering
		cy.wait(2000)
		cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
		cy.wait(1000)
		cy.get('.uk-width-expand').scrollIntoView()
		cy.get('.uk-width-expand').select('Published - Live').should('have.value', '1')
	
	// Validate the result
		cy.wait(1000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()
		cy.wait(1000)
		cy.get('tbody > :nth-child(1) > :nth-child(13)').scrollIntoView().should('contain', 'Published - Live')
	})
})