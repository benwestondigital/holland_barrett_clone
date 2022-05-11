/// <reference types="Cypress" />

describe('UI Testing', () => {
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

describe('Product page', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.get('[data-testid=product-card]').first().click();
  });
  it('product page has correct title', () => {
    cy.get('[data-testid=product-name]').should(
      'have.text',
      'PE Nutrition Performance Whey Chocolate 900g'
    );
  });
  it('every basic element exists', () => {
    cy.get('[data-testid=header]').should('exist');
    cy.get('[data-testid=search-form]').should('exist');
    cy.get('[data-testid=search-input]').should('exist');
    cy.get('[data-testid=nav-icon]').should('exist');
    cy.get('[data-testid=nav-categories]').should('exist');
    cy.get('[data-testid=reduced-banner]').should('exist');
    cy.get('[data-testid=product-breadcrumbs]').should('exist');
    cy.get('[data-testid=product-name]').should('exist');
    cy.get('[data-testid=product-brand]').should('exist');
    cy.get('[data-testid=product-stars]').should('exist');
    cy.get('[data-testid=store-rating]').should('exist');
    cy.get('[data-testid=product-flavour]').should('exist');
    cy.get('[data-testid=product-page-price]').should('exist');
    cy.get('[data-testid=product-page-100g]').should('exist');
    cy.get('[data-testid=decrease-button]').should('exist');
    cy.get('[data-testid=product-quantity]').should('exist');
    cy.get('[data-testid=increase-button]').should('exist');
    cy.get('[data-testid=add-to-basket-product]').should('exist');
    cy.get('[data-testid=store-availability]').should('exist');
    cy.get('[data-testid=product-page-image]').should('exist');
    cy.get('[data-testid=footer]').should('exist');
    cy.get('[data-testid=legal-info]').should('exist');
  });
  it('basket number of items hidden before product is added', () => {
    cy.get('[data-testid=nav-basket-number]').should('not.exist');
  });
  it('adding product to basket increments Nav basket number', () => {
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=nav-basket-number]').should('exist');
    cy.get('[data-testid=nav-basket-number]').should('have.text', 1);
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=nav-basket-number]').should('have.text', 2);
  });
  it('quantity buttons increase and decrease product quantity', () => {
    cy.get('[data-testid=product-quantity]').should('have.value', 1);
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=product-quantity]').should('have.value', 2);
    cy.get('[data-testid=decrease-button]').click();
    cy.get('[data-testid=product-quantity]').should('have.value', 1);
  });
  it('quantity will not go below 0', () => {
    cy.get('[data-testid=product-quantity]').should('have.value', 1);
    cy.get('[data-testid=decrease-button]').click();
    cy.get('[data-testid=product-quantity]').should('have.value', 0);
    cy.get('[data-testid=decrease-button]').click();
    cy.get('[data-testid=product-quantity]').should('have.value', 0);
  });
  it('Nav basket increase by correct quantity value', () => {
    cy.get('[data-testid=product-quantity]').should('have.value', 1);
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=product-quantity]').should('have.value', 5);
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=nav-basket-number]').should('have.text', 5);
  });
  it('clicking company logo returns to homepage', () => {
    cy.get('[data-testid=logo]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
  it('clicking home breadcrumb returns to homepage', () => {
    cy.get('[data-testid=product-breadcrumbs]').contains('Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
describe.only('Basket Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });
  it('returns empty basket message when no items added', () => {
    cy.get('[data-testid=basket-link]').click();
    cy.get('[data-testid=empty-basket]').should(
      'contain',
      'You have no products in your basket'
    );
  });
  it('adds one of single product to basket from homepage', () => {
    cy.get('[data-testid=product-card]').first().click();
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=basket-link]').click();
    cy.get('[data-testid=product-name]').should(
      'have.text',
      'PE Nutrition Performance Whey Chocolate 900g'
    );
    cy.get('[data-testid=basket-item-quantity]').should('have.text', 1);
    cy.get('[data-testid=basket-product-price]').should('have.text', '£18.00');
    cy.get('[data-testid=basket-total-price]').should('have.text', '£21.49');
  });
  it('adds multiple quantity of single product to basket from homepage', () => {
    cy.get('[data-testid=product-card]').first().click();
    cy.get('[data-testid=product-quantity]').should('have.value', 1);
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=product-quantity]').should('have.value', 5);
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=basket-link]').click();
    cy.get('[data-testid=product-name]').should(
      'have.text',
      'PE Nutrition Performance Whey Chocolate 900g'
    );
    cy.get('[data-testid=basket-item-quantity]').should('have.text', 5);
    cy.get('[data-testid=basket-subtotal-price]').should('have.text', '£90.00');
    cy.get('[data-testid=basket-total-price]').should('have.text', '£93.49');
  });
  it('adds single different products to basket', () => {
    cy.get('[data-testid=product-card]').first().click();
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=logo]').click();
    cy.get('[data-testid=product-card]').last().click();
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=basket-link]').click();
    cy.get('[data-testid=product-name]')
      .first()
      .should('have.text', 'PE Nutrition Performance Whey Chocolate 900g');
    cy.get('[data-testid=product-name]')
      .last()
      .should(
        'have.text',
        'Optimum Nutrition Lean Whey Sugar Free Strawberries & Cream 740g'
      );
    cy.get('[data-testid=basket-item-quantity]').first().should('have.text', 1);
    cy.get('[data-testid=basket-product-price]')
      .first()
      .should('have.text', '£18.00');
    cy.get('[data-testid=basket-item-quantity]').last().should('have.text', 1);
    cy.get('[data-testid=basket-product-price]')
      .last()
      .should('have.text', '£15.00');
    cy.get('[data-testid=basket-subtotal-price]').should('have.text', '£33.00');
    cy.get('[data-testid=basket-total-price]').should('have.text', '£36.49');
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
