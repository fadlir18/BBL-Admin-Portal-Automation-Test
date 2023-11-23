describe('Filternig consumer tag by name', function() {
    it('Filternig consumer tag by name', function() {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

        //Filtering
        cy.wait(3000)
        cy.get('.uk-input').click()
        cy.wait(1500)
        cy.get('.uk-input').type('NKC', { delay: 50 })
        cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView({ duration: 2000 }).click()
        cy.get('tbody > tr > :nth-child(2)').scrollIntoView({ duration: 2000 }).should('contain', 'NKC')
    })
})