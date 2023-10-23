describe('reset filter campaign', function() {
    it('reset filter campaign', function () {
        
		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

        // Filtering
        cy.wait(1000)
        cy.get('.uk-width-1-5 > .uk-inline > .uk-input').click()
        cy.get('.uk-width-1-5 > .uk-inline > .uk-input').type('Testing 123', { delay: 50 })
        cy.get('.uk-flex-middleuk-margin-small-left > span').click()
    })
})