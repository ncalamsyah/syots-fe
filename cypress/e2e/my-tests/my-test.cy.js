describe("Accessing Homepage", () => {
  it("visits the Homepage URL", () => {
    cy.visit("/");
  });
});

describe("Accessing Thoughts Page", () => {
  it("clicks on Thoughts menu", () => {
    cy.visit("/");
    cy.contains("Thoughts").click();
    cy.contains("Published Thoughts").should("exist");
  });
});

describe("Accessing Login Page", () => {
  it("clicks on Login menu", () => {
    cy.visit("/");
    cy.contains("Login").click();
  });
  it("checking the login page", () => {
    cy.get("input").should("exist");
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.contains("Login").should("exist");
    cy.contains("Login as Admin").should("exist");
    cy.contains("Forgot Password ?").should("exist");
    cy.contains("Don't have an account yet?").should("exist");
  });
});

describe("Accessing Admin Login Page", () => {
  it("clicks on Login menu", () => {
    cy.visit("/");
    cy.contains("Login").click();
  });
  it("check if there is a login as admin button and click", () => {
    cy.contains("Login as Admin").click();
  });
});

describe("Accessing Register Page", () => {
  it("clicks on Login menu", () => {
    cy.visit("/");
    cy.contains("Login").click();
  });
  it("check if there is a register link and click", () => {
    cy.contains("Don't have an account yet?").click();
  });
  it("checking the register page", () => {
    cy.get("input").should("exist");
    cy.get("#firstname").should("exist");
    cy.get("#lastname").should("exist");
    cy.get("#username").should("exist");
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
    cy.get("#confirmPassword").should("exist");
    cy.contains("Register").should("exist");
    cy.contains("Already have an account?").should("exist");
  });
});
