describe("Testing", () => {
  it("Check", () => {
    cy.visit("/");
    cy.contains("Welcome to app");
  });
});
