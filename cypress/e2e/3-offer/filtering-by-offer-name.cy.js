describe('filtering by offer id', function() {
	it('filtering by offer id', function () {
		//Login
		cy.login('QATester','OttoDigital2023!')
		cy.title().should('be.equal','Superindo CMS')

		//Filtering
		cy.wait(2000)
		cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .uk-inline > .uk-input').click().type('MORINAGA C/SCH SUSU BUBUK a')
		cy.get('tbody > :nth-child(1) > :nth-child(3)').scrollIntoView().should('contain', 'MORINAGA C/SCH SUSU BUBUK a')
	})
})