describe('filtering active campaign', function() {
    it('filtering active campaign', function () {
        // Login
        cy.login('QATester','Brilliant77!')
		cy.title().should('be.equal','Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

        // Filtering    
        cy.wait(1000)
        cy.get('.uk-width-expand').scrollIntoView()
        cy.get('.uk-width-expand').select('Active').should('have.value', '1')
        cy.wait(2000)
        cy.get('.uk-flex-bottom > .uk-flex-middle').click()
        cy.wait(1000)
        cy.get('.uk-background-muted > tr > :nth-child(9)').scrollIntoView()
        cy.get('tbody > :nth-child(2) > :nth-child(10)').contains('Active')
        cy.get(':nth-child(3) > :nth-child(10)').contains('Active')
        cy.get(':nth-child(4) > :nth-child(10)').contains('Active')
        cy.get(':nth-child(5) > :nth-child(10)').contains('Active')
        cy.get(':nth-child(6) > :nth-child(10)').contains('Active')
    })
})