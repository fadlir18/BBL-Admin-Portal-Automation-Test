describe('Filtering product by SKU', function() {
    it('Filtering product by SKU', function() {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()

        //Filtering
        .wait(50000)
        cy.get('.uk-padding-remove > .uk-inline > .uk-input').type('4430422', { delay: 50 })
        cy.get('.uk-flex-bottom > .uk-flex-middle').click()
        cy.get('tbody > tr > :nth-child(1)').scrollIntoView({ duration: 2000 }).should('contain', '4430422')
    })
})