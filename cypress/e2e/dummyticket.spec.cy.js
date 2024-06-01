describe('Book a flight on Dummy ticket app', () => {
  it('Launch the Dummy Landing Page', () => {
    cy.visit('/')
    cy.url().should('include', '/auth/login')
    cy.title().should('eq', 'OrangeHRM')
    cy.location('protocol').should('eq', 'https:')
  })
  it('Navigate to Testimonials from OrangeHRM Landing Page', () => {
    cy.get('a[href="http://www.orangehrm.com"]').should('be.visible').invoke('attr', 'target', '_self').realClick()
    cy.origin('https://www.orangehrm.com/', () =>{
      // cy.get('.nav-item:nth-child(2) .nav-link-hed').should('exist').realHover()
      cy.contains('Why OrangeHRM').trigger('mouseover', {force:true})
      // cy.contains('Book a Free Demo').click({force:true})
      // cy.clickSpecifiedElement('Why OrangeHRM')
      // cy.clickSpecifiedElement('Our Customers')
    })
  })
})