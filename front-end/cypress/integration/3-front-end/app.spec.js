Cypress.env();

describe("app testing", () => {
  it("visits app.js", () => {
    cy.visit("http://localhost:3001/");
  });
});
