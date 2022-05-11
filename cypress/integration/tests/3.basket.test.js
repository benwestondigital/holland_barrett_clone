describe('Basket Page - /basket', () => {
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
  it('adds multiple different products to basket', () => {
    cy.get('[data-testid=product-card]').first().click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=add-to-basket-product]').click();
    cy.get('[data-testid=logo]').click();
    cy.get('[data-testid=product-card]').last().click();
    cy.get('[data-testid=increase-button]').click();
    cy.get('[data-testid=increase-button]').click();
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
    cy.get('[data-testid=basket-item-quantity]').first().should('have.text', 3);
    cy.get('[data-testid=basket-product-price]')
      .first()
      .should('have.text', '£54.00');
    cy.get('[data-testid=basket-item-quantity]').last().should('have.text', 3);
    cy.get('[data-testid=basket-product-price]')
      .last()
      .should('have.text', '£45.00');
    cy.get('[data-testid=basket-subtotal-price]').should('have.text', '£99.00');
    cy.get('[data-testid=basket-total-price]').should('have.text', '£102.49');
  });
});
