describe("Testing", () => {
  it("Check", () => {
    cy.visit("/");
    cy.contains("FOODS").click();
    cy.get("[data-test-id=menu]")
      .contains("Pork")
      .click();
    cy.get("[data-test-id=menu]").should("not.exist");
    cy.contains("Pork");
  });
});
