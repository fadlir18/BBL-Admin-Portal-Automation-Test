describe('filtering by offer id', function() {
	it('filtering by offer id', function () {
		//Login
		cy.login('QATester','Brilliant77!')
		cy.title().should('be.equal','Superindo CMS')

		//Filtering
		cy.wait(2000)
		cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
		cy.wait(1000)
		cy.get('.uk-padding-remove-left > .uk-inline > .uk-input').click().type('010/14/12/2022')
		cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', '010/14/12/2022')
		
	})
})