/// <reference types="cypress" />

import '../1-auth/login.cy'
it('add campaign', function () {

// Add campaign start
	cy.wait(5000)
	cy.get('div.uk-grid-margin > .uk-button').click()
	cy.get('#form-stacked-text').click()
	cy.get('#form-stacked-text').type('Automation - Testing add campaign', { delay: 50 })
	cy.get('.uk-button-danger').click()
// Add campaign end


// Validating url is right start
	cy.get('.uk-margin-top > #modal-example > .uk-modal-dialog > .uk-text-center > .red').click()
	cy.url().should('include', '/admin/campaign/campaigns/')
// Validating url is right end
	

// Validating campaign on the first page of the table start
	cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()
	cy.wait(2000)
	cy.get('tbody > :nth-child(1) > :nth-child(3)').scrollIntoView().should('contain', 'Automation - Testing add campaign')
// Validating campaign on the first page of the table end

})