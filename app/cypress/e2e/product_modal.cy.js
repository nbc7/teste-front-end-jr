describe('Opens a modal with product information', () => {
  it('scrolls through the carousel, opens modal, compare the product information and closes', () => {
    // visit the page
    cy.viewport(1440, 920);
    cy.visit('http://localhost:4173/');
    cy.contains('Produtos relacionados').should('be.visible');

    // scrolls through the carousel
    cy.get('.carousel').should(($carousel) => {
      expect($carousel.height()).to.be.greaterThan(0);
    });

    cy.get('.product-showcase-container').first().find('.caret-right').click();
    cy.wait(700);
    cy.get('.product-showcase-container').first().find('.caret-right').click();
    cy.wait(700);

    cy.get('.product-showcase-container').first().find('.caret-right').should('be.hidden');
    cy.wait(700);

    cy.get('.product-showcase-container').first().find('.caret-left').click();
    cy.wait(700);
    cy.get('.product-showcase-container').first().find('.caret-right').should('be.visible');

    // opens modal and compares the product title
    cy.get('.product-showcase-container')
      .first()
      .find('.product-container')
      .eq(4)
      .find('h3')
      .then(($h3) => {
        const productTitle = $h3.text();

        cy.get('.product-showcase-container').first().find('.product-container').eq(4).click();
        cy.get('.product-modal').should('be.visible');
        cy.get('.product-modal')
          .find('h3')
          .should(($title) => {
            expect($title.text()).to.equal(productTitle);
          });
      });

    // closes modal with the X button
    cy.get('.product-modal').find('button').click();
    cy.get('.product-modal').should('not.exist');

    // opens modal and compares the product price
    cy.get('.product-showcase-container')
      .first()
      .find('.product-container')
      .eq(4)
      .find('.price')
      .then(($price) => {
        const productPrice = $price.text();

        cy.get('.product-showcase-container').first().find('.product-container').eq(4).click();
        cy.get('.product-modal').should('be.visible');
        cy.get('.product-modal')
          .find('.price')
          .should(($price) => {
            expect($price.text()).to.equal(productPrice);
          });
      });

    // closes modal clicking on the background but not clicking on the modal
    cy.get('.product-modal').click();
    cy.get('.product-modal').should('be.visible');

    cy.get('.product-modal-container').click();
    cy.get('.product-modal').should('not.exist');
  });
});
