//your code here
describe("Feedback Form Test", () => {
  const baseUrl = "http://localhost:3000"; // change this to your app's base URL

  it("should have all necessary form elements", () => {
    cy.visit(baseUrl + "/main.html");

    cy.contains("Feedback Form").should("be.visible");

    cy.get("form").should("exist");

    cy.get("input#name")
      .should("have.attr", "minlength", "3")
      .should("have.attr", "maxlength", "50");
    cy.get("label[for='name']").should("be.visible");

    cy.get("input#portfolio[type='url']").should("exist");
    cy.get("label[for='portfolio']").should("be.visible");

    cy.get("input#favColor[type='color']").should("exist");
    cy.get("label[for='favColor']").should("be.visible");

    cy.get("input#likeness[type='range']")
      .should("have.attr", "min", "1")
      .should("have.attr", "max", "100");
    cy.get("label[for='likeness']").should("be.visible");
  });

  it("should have a 'post' method on the form", () => {
    cy.get("form")
      .should("have.attr", "method")
      .and("match", /post/i);
  });
});