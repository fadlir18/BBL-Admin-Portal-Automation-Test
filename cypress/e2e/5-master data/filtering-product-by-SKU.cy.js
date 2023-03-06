describe('view all masterdata', function() {
    it('view all masterdata', function() {

        //Login
        cy.login('QATester','Brilliant77!')
        cy.title().should('be.equal','Superindo CMS')

        //Navigating
        .wait(2000)
        cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click().wait(500)
        cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(3)').click()

        //Filtering
        .wait(2000)
        cy.get('.uk-padding-remove > .uk-inline > .uk-input').type('4430422', { delay: 50 })
        cy.get('.uk-flex-bottom > .uk-flex-middle').click()
        cy.get('tbody > tr > :nth-child(1)').scrollIntoView({ duration: 2000 }).should('contain', '4430422')
    })
})