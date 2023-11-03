describe('view all masterdata', function() {
    it('view all masterdata', function() {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(6) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()

        //Filtering
        .wait(2000)
        cy.get('.uk-width-1-4.uk-first-column > .uk-inline > .uk-input').click().wait(1000).type('ADI SUCIPTO', { delay: 50 })
        cy.get('.uk-flex-bottom > .uk-flex-middle').click()
        cy.get('tbody > tr > :nth-child(1)').scrollIntoView({ duration: 2000 }).should('contain', 'ADI SUCIPTO')
    })
})