describe('Product page - /products', () => {
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
