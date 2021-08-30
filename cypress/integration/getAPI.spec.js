/// <reference types="cypress" />


describe('Automação de teste - API', () => {
  it('Consulta de autor', () => {
    cy.getAuthors().
      should(response => {
        expect(response.status).to.be.equal(201)
      })
  })
})
