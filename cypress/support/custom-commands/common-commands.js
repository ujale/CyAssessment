Cypress.Commands.add('viewSpecifiedElement', (text) => {
    cy.contains(text).should('exist').and('be.visible')
})

Cypress.Commands.add('landingPageValidations', (text) => {
    cy.url().should('include', 'dummyticket.com')
    cy.title().should('include', 'Dummy Ticket')
    cy.location('protocol').should('eq', 'https:')
})

Cypress.Commands.add('typeAText', (element, text) => {
    cy.get(element).should('exist').and('be.visible').fill(text)
})

Cypress.Commands.add('clickSpecifiedElement', (element) => {
    cy.get(element).should('exist').and('be.visible').click()
})

Cypress.Commands.add('pickAnOption', (element, text) => {
    cy.get(element).should('exist').and('be.visible').select(text)
})

Cypress.Commands.add('inputDetails', (field, text) => {
    cy.get(`${field}`).should('exist').and('be.visible').fill(text)
})
