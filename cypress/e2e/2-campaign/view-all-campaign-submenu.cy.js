/// <reference types="cypress" />

import '../1-auth/login.cy'
it.only('view all campaign', function () {
    cy.visit('https://qa-cms.mysuperindo.co.id/login')
    cy.wait(1000)
    cy.get('.active').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(2)').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(4)').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(5)').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(6)').click()
})