describe('view all campaign', function() {
    it('view all campaign', function () {
        
		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()


        cy.wait(1000)
        cy.get('.active').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(4)').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(5)').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(6)').click()
    })
})