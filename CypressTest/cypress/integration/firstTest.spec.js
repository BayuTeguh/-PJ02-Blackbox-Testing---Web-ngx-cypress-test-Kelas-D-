/// <reference types="cypress/types/jquery" />

describe("Form Testing", () => {
  it("Visit Page, Changing theme to Lightmode and Testing Inline Form", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("Light").click();
    cy.contains("Dark").click();
    cy.contains("nb-card", "Inline form")
      .find('[placeholder="Jane Doe"]')
      .click()
      .type("Bayu Teguh")
      .should("have.value", "Bayu Teguh");
    cy.contains("nb-card", "Inline form")
      .find('[placeholder="Email"]')
      .click()
      .type("bayuteguh@gmail.com")
      .should("have.value", "bayuteguh@gmail.com");
    cy.contains("nb-card", "Inline form").find(".custom-checkbox").click();
  });

  it("Testing Using the Grid", () => {
    cy.get("#inputEmail1")
      .type("bayuteguh@gmail.com")
      .should("have.value", "bayuteguh@gmail.com");
    cy.get("#inputPassword2").type("banyaksandi").should("have.value", "banyaksandi");
    cy.contains("Option 1").click();
  });

  it("Testing Basic Form", () => {
    cy.get("#exampleInputEmail1")
      .type("bayuteguh@gmail.com")
      .should("have.value", "bayuteguh@gmail.com");
    cy.get("#exampleInputPassword1")
      .type("banyaksandi")
      .should("have.value", "banyaksandi");
    cy.contains("Check me out").click();
  });

  it("Testing Form Without Labels", () => {
    cy.get('[placeholder="Recipients"]')
      .type("Bayu Teguh")
      .should("have.value", "Bayu Teguh");
    cy.get('[placeholder="Subject"]')
      .type("Assalamualaikum")
      .should("have.value", "Assalamualaikum");
    cy.get('textarea[placeholder="Message"]')
      .type("Assalamualaikum, saya Bayu Teguh")
      .should("have.value", "Assalamualaikum, saya Bayu Teguh");
  });

  it("Testing Block form", () => {
    cy.get("#inputFirstName")
      .type("Bayu")
      .should("have.value", "Bayu");
    cy.get("#inputLastName").type("Teguh").should("have.value", "Teguh");
    cy.get("#inputEmail")
      .type("bayuteguh@gmail.com")
      .should("have.value", "bayuteguh@gmail.com");
    cy.get("#inputWebsite")
      .type("https://github.com/BayuTeguh/-PJ02-Blackbox-Testing---Web-ngx-cypress-test-Kelas-D-")
      .should("have.value", "https://github.com/BayuTeguh/-PJ02-Blackbox-Testing---Web-ngx-cypress-test-Kelas-D-");
  });
});
