describe("Testing", () => {
  it("Check", () => {
    cy.visit("/");
    cy.contains("FOODS").click();
    cy.get("[role=menu]")
      .contains("Pork")
      .click();
    cy.get("[role=menu]").should("not.exist");
    cy.contains("Pork");
  });
});
