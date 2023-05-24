describe('View all consumer', function() {
    it('View all consumer', function() {

        //Login
        cy.login('QATester','OttoDigital2023!')
        cy.title().should('be.equal','Superindo CMS')

		//Check submenu
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click().wait(1000)
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click().wait(1000)
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()
	})

})