describe('E2E Testing', () => {
  describe('Home Page', () => {
    it('has correct title', () => {
      cy.visit('http://localhost:3000');
      cy.get('[data-testid=home-title]').should(
        'have.text',
        'Protein Powder for £30 or Less'
      );
    });
    it('Every basic element exists', () => {
      cy.visit('http://localhost:3000');
      cy.get('[data-testid=home-title]').should('exist');
      cy.get('[data-testid=header]').should('exist');
      cy.get('[data-testid=search-form]').should('exist');
      cy.get('[data-testid=search-input]').should('exist');
      cy.get('[data-testid=nav-icon]').should('exist');
      cy.get('[data-testid=nav-categories]').should('exist');
      cy.get('[data-testid=reduced-banner]').should('exist');
      cy.get('[data-testid=home-breadcrumbs]').should('exist');
      cy.get('[data-testid=home-main-content]').should('exist');
      cy.get('[data-testid=home-sidebar]').should('exist');
      cy.get('[data-testid=home-categories]').should('exist');
      cy.get('[data-testid=home-filters]').should('exist');
      cy.get('[data-testid=product-grid]').should('exist');
      cy.get('[data-testid=product-image]').should('exist');
      cy.get('[data-testid=store-rating]').should('exist');
      cy.get('[data-testid=add-to-basket-home]').should('exist');
      cy.get('[data-testid=product-image]').should('exist');
      cy.get('[data-testid=store-rating]').should('exist');
      cy.get('[data-testid=footer]').should('exist');
      cy.get('[data-testid=legal-info]').should('exist');
    });
  });
});
