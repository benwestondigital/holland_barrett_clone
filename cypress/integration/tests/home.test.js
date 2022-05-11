/// <reference types="Cypress" />

describe('Home Page - /', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('has correct title', () => {
    cy.get('[data-testid=home-title]').should(
      'have.text',
      'Protein Powder for £30 or Less'
    );
  });
  it('every basic element exists', () => {
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
  it('product card links to product page', () => {
    cy.get('[data-testid=product-card]').first().click();
    cy.url().should('include', '/products');
  });
  it('basket number of items hidden before product is added', () => {
    cy.get('[data-testid=nav-basket-number]').should('not.exist');
  });
  it('adding product to basket increments Nav basket number', () => {
    cy.get('[data-testid=add-to-basket-home]').first().click();
    cy.get('[data-testid=nav-basket-number]').should('exist');
    cy.get('[data-testid=nav-basket-number]').should('have.text', 1);
    cy.get('[data-testid=add-to-basket-home]').first().click();
    cy.get('[data-testid=nav-basket-number]').should('have.text', 2);
  });
  it('product prices have a decimal point', () => {
    cy.get('[data-testid=home-product-price]').first().should('contain', '.');
  });
  it('product prices have 2 decimal places', () => {
    cy.get('[data-testid=home-product-price]').first().should('contain', '00');
  });
});



/* 
  // When click add to basket it should increment the nav button
  Run through journey of buying item
  // Add item to basket
  Buying item in different places - home and product page
  Same on mobile
  Certain elements hidden on mobile
  Look at cypress example tests
  // Check basic elements exist on each page
  // increment up and down quantity buttons
  check price is correct when adding item
  // Prices contain 2 decimal places
*/
