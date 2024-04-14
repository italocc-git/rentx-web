// describe('Cars List Page', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })
//   it('should render the page', () => {
//     cy.contains('Começar agora').click()

//     cy.location('pathname').should('include', '/inicio')
//   })
//   it('should render the first car page', () => {
//     cy.contains('Começar agora').click()

//     cy.get('a[href^="/inicio/carro"]').first().click()
//     cy.location('pathname').should('include', '/carro')
//   })
// })
