describe('First Test', () => {
  it('has correct title', () => {
    cy.visit('http://localhost:3001');
    cy.contains('Protein Powder for £30 or Less').should('exist');
    cy.get('div');
  });
});
