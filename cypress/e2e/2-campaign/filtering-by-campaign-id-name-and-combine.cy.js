describe('filtering by campaign id', function () {
	it('filtering by campaign id', function () {

		// Login
		cy.login('QATester', 'Brilliant77!')
		cy.title().should('be.equal', 'Superindo CMS')

		// Navigating
		cy.get('.uk-button').click()
		cy.wait(1000)
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
		cy.get(':nth-child(2) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

		// Filtering by campaign id
		cy.wait(5000)
		cy.get('.uk-width-1-5 > .uk-inline > .uk-input').click().type('006/23/10/2023')
		cy.wait(1000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()

		// Validate data on table
		cy.wait(1000)
		cy.get('tbody > tr > :nth-child(2)').scrollIntoView().should('contain', '006/23/10/2023')

		// Reseting filter 
		cy.wait(3000)
		cy.get('.uk-flex-middleuk-margin-small-left').click()

		// Filtering by campaign name
		cy.wait(2000)
		cy.get('.uk-width-1-4 > .uk-inline > .uk-input').click().type('Automation testing - Add new campaign')
		cy.wait(1000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()

		// Validate data on table
		cy.wait(1000)
		cy.get('tbody > :nth-child(1) > :nth-child(3)').scrollIntoView().should('contain', 'Automation testing - Add new campaign')

		// Reseting filter 
		cy.wait(3000)
		cy.get('.uk-flex-middleuk-margin-small-left').click()

		// Filtering by campaign id & name
		cy.wait(2000)
		cy.get('.uk-width-1-5 > .uk-inline > .uk-input').click().type('006/23/10/2023')
		cy.wait(1000)
		cy.get('.uk-width-1-4 > .uk-inline > .uk-input').click().type('Automation testing - Add new campaign')
		cy.wait(2000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()

		// Validate data on table
		cy.get('tbody > tr > :nth-child(2)').scrollIntoView().should('contain', '006/23/10/2023')
		cy.wait(1000)
		cy.get('tbody > :nth-child(1) > :nth-child(3)').scrollIntoView().should('contain', 'Automation testing - Add new campaign')
	})
})