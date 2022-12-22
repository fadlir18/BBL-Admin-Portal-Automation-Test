/// <reference types="cypress" />

import '../1-auth/login.cy'
it.only('view all user management', function() {
    cy.wait(1000)
    cy.get(':nth-child(4) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
    cy.wait(1000)
    cy.get(':nth-child(4) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()
    cy.wait(1000)
    cy.get(':nth-child(4) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
    cy.wait(1000)
    cy.get(':nth-child(4) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()
})