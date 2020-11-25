/// <reference types="Cypress" />

describe('arrow keys', () => {
    beforeEach(() => {
        cy.changeProps()
        cy.changeSlots()
    })

    it('without select date', () => {
        cy.visit('/')
        cy.tab()
            .type('{downarrow}{rightarrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '31')
        cy.get('.pdp-input').type('{uparrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '24')
        cy.get('.pdp-input').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '20')
        cy.get('.pdp-input').type('{uparrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '13')
        cy.get('.pdp-input').type('{leftarrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '14')
        cy.get('.pdp-input').type('{uparrow}{uparrow}')
        cy.get('[data-column=0] .hover').should('contain.text', '31')
        cy.get('.pdp-input').type('{leftarrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '1')
        cy.get('.pdp-input').type('{rightarrow}')
        cy.get('[data-column=0] .hover').should('contain.text', '31')
        cy.get('.pdp-input').type('{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '27')
        cy.get('.pdp-input').type('{uparrow}{uparrow}{uparrow}{uparrow}')
        cy.get('[data-column=0] .hover').should('contain.text', '30')
        cy.get('.pdp-input').type('{leftarrow}{leftarrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '1')
        cy.get('.pdp-input').type('{uparrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}')
        cy.get('[data-column=0] .hover').should('contain.text', '19')
        cy.get('.pdp-input').type('{uparrow}{uparrow}{uparrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '29')
        cy.get('.pdp-input').type('{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '1')
        cy.get('.pdp-input').type('{leftarrow}')
        cy.get('[data-column=1] .hover').should('contain.text', '2')
    })

    it('with select date', () => {
        cy.visit('/')
        cy.tab().get('.pdp-year').first().click()
        cy.get('li').contains('1399').click()
        cy.tab().get('.pdp-month').first().click()
        cy.get('li').contains('فروردین').click()
        cy.get('.pdp-input').type('{downarrow}', { force: true })
        cy.get('.hover').should('contain.text', '1')
        cy.get('.pdp-input').type('{downarrow}{downarrow}{rightarrow}{enter}')
        cy.get('.start-range').should('contain.text', '14')
        cy.get('.pdp-input').type('{downarrow}{downarrow}{downarrow}{downarrow}{rightarrow}{enter}')
        cy.get('.pdp-input').should('have.value', '1399/01/14 - 1399/02/10')
        cy.get('.pdp-input').focus().get('.end-range').should('contain.text', '10')
        cy.get('[data-column=0] .in-range').should('not.contain.text', '14').should('not.contain.text', '13')
        cy.get('[data-column=1] .in-range').should('not.contain.text', '10').should('not.contain.text', '11')
        cy.get('.pdp-input').type('{downarrow}{rightarrow}{rightarrow}{enter}')
        cy.get('.start-range').should('contain.text', '15')
        cy.get('.pdp-input').type('{uparrow}{uparrow}{uparrow}{enter}')
        cy.get('.start-range').should('contain.text', '25')
        cy.get('.pdp-input').type('{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}')
        cy.get('.pdp-input').should('have.value', '1399/01/25 - 1399/03/05')
        cy.get('.pdp-input').focus().get('.end-range').should('contain.text', '5')
        cy.get('.pdp-arrow').first().click().click()
        cy.get('.pdp-input').type('{uparrow}{uparrow}{uparrow}{enter}', { force: true })
        cy.get('.start-range').should('contain.text', '4')
        cy.get('.pdp-input').type('{downarrow}{downarrow}{downarrow}{downarrow}{leftarrow}{leftarrow}{enter}')
        cy.get('.pdp-input').should('have.value', '1399/01/04 - 1399/02/03')
        cy.get('.pdp-input').focus().get('.end-range').should('contain.text', '3')

    })
})