describe('view all masterdata', function() {
    it('view all masterdata', function() {

        //Login
        cy.login('QATester','Brilliant77!')
        cy.title().should('be.equal','Superindo CMS')

        //Navigating
        cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .parent-text').click()
        cy.get(':nth-child(3) > .router-link-active > .uk-nav > .uk-parent > .uk-nav-sub > :nth-child(1)').click()

        //Filtering
        .wait(2000)
        cy.get('.uk-input').click()
        .wait(1500)
        cy.get('.uk-input').type('Test automation Custom Consumer Tag', { delay: 50 })
        cy.get('.uk-flex-bottom > .uk-flex-middle').scrollIntoView({ duration: 2000 }).click()
        cy.get('tbody > tr > :nth-child(2)').scrollIntoView({ duration: 2000 }).should('contain', 'Test automation Custom Consumer Tag')
    })
})