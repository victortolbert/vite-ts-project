/// <reference types="cypress" />

describe('/Project', () => {
  beforeEach(() => {
    cy.visit('/Project');
  });

  it('Projects', () => {
    cy.url().should('include', '/Project');
  });
});
