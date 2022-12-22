/// <reference types="cypress" />

import '../1-auth/login.cy'
it('filternig published-live offer', function () {

// Filtering start
	cy.wait(5000)
	cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
	cy.wait(1000)
	cy.get('.uk-width-expand').scrollIntoView()
	cy.get('.uk-width-expand').select('Published - Live').should('have.value', '1')
// Filtering end

// Validate the result start
	cy.wait(1000)
	cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView().click()
	cy.wait(1000)
	cy.get(':nth-child(1) > :nth-child(13) > [data-v-0941ee96=""] > .label').scrollIntoView().should('contain', 'Published - Live')
// Validate the result end
})