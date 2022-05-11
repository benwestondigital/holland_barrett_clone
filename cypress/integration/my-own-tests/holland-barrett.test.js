describe('E2E Testing', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  describe('Home Page', () => {
    describe('Desktop', () => {
      it('has correct title', () => {
        cy.get('[data-testid=home-title]').should(
          'have.text',
          'Protein Powder for £30 or Less'
        );
      });
      it('Every basic element exists', () => {
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
    it('Product card links to product page', () => {
      cy.contains('PE Nutrition').click({ force: true });
      cy.url().should('include', '/products');
    });
  });
  describe.skip('Product Page', () => {
    describe('Desktop', () => {
      it('should ', () => {});
    });
  });
});

/* 
  When click add to basket it should increment the nav button
  Run through journey of buying item
  Add item to basket
  Buying item in different places - home and product page
  Same on mobile
  Look at cypress example tests
  Check basic elements exist on each page
  increment up and down quantity buttons
  check price is correct when adding item
  Prices contain 2 decimal places
*/
