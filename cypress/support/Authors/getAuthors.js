Cypress.Commands.add('getAuthors', () => {
    cy.request({
      method: 'GET',
      url: '/api/v1/Authors/1',
      failOnStatusCode: false
    }).then(response => {
      return response
    })
})