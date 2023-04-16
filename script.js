describe("Feedback Form Test", () => {
  const baseUrl = "http://localhost:3000"; // change this to your app's base URL

  beforeEach(() => {
    cy.visit(baseUrl + "/main.html");
  });

  it("should have all necessary form elements", () => {
    cy.contains("Feedback Form").should("be.visible");

    cy.get("form").within(() => {
      cy.get("input#name")
        .should("have.attr", "minlength", "3")
        .should("have.attr", "maxlength", "50");
      cy.get("label[for='name']").should("be.visible");

      cy.get("input#portfolio[type='url']").should("exist");
      cy.get("label[for='portfolio']").should("be.visible");

      cy.get("select#favColor").should("exist");
      cy.get("option[value='red']").should("exist");
      cy.get("option[value='blue']").should("exist");
      cy.get("option[value='green']").should("exist");
      cy.get("option[value='yellow']").should("exist");
      cy.get("option[value='purple']").should("exist");
      cy.get("label[for='favColor']").should("be.visible");

      cy.get("input#likeness[type='range']")
        .should("have.attr", "min", "1")
        .should("have.attr", "max", "100");
      cy.get("label[for='likeness']").should("be.visible");
    });
  });

  it("should have a 'post' method on the form", () => {
    cy.get("form").should("have.attr", "method", "post");
  });
});