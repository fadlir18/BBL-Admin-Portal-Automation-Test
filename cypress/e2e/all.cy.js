/// <reference types="cypress" />

context('Actions', () => {

	before(() => {
		cy.visit('https://qa-cms.mysuperindo.co.id/login')
		cy.get(':nth-child(3) > .uk-inline > .uk-input').type('QATester')
		cy.get('.parent-password-form > .uk-inline > .uk-input').click()
		cy.get('.parent-password-form > .uk-inline > .uk-input').type('Brilliant77!')
		cy.get('.uk-button.uk-width-1-1').click()
	})

	it('filtering active campaign', () => {
		Cypress.session.getCurrentSessionData()
		cy.wait(1000)
		cy.get('.uk-width-expand').scrollIntoView()
		cy.get('.uk-width-expand').select('Active').should('have.value', '1')
			.wait(2000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()
			.wait(1000)
		cy.get('.uk-background-muted > tr > :nth-child(9)').scrollIntoView()
		cy.get(':nth-child(1) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Active')
		cy.get(':nth-child(2) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Active')
		cy.get(':nth-child(3) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Active')
		cy.get(':nth-child(4) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Active')
		cy.get(':nth-child(5) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Active')
			.wait(2000)

  		// filtering inactive campaign start

		cy.wait(1000)
		cy.get('.uk-width-expand').scrollIntoView()
		cy.get('.uk-width-expand').select('Inactive').should('have.value', '0')
			.wait(2000)
		cy.get('.uk-flex-bottom > .uk-flex-middle').click()
			.wait(1000)
		cy.get('.uk-background-muted > tr > :nth-child(9)').scrollIntoView()
		cy.get(':nth-child(1) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
		cy.get(':nth-child(2) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
		cy.get(':nth-child(3) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
		cy.get(':nth-child(4) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
		cy.get(':nth-child(5) > :nth-child(9) > [data-v-4fe63c37=""] > .label').contains('Inactive')
	
		// filtering inactive campaign end

		// reset filter start

		cy.wait(1000)
        .get('.uk-width-1-4 > .uk-inline > .uk-input').click()
        .get('.uk-width-1-5 > .uk-inline > .uk-input').type('Testing 123')
        .get('.uk-flex-middleuk-margin-small-left > span').click()

		// reset filter end
	})

})

