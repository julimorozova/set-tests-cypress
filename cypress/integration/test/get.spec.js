describe("GET", () => {

    it("By ID", () => {
        cy.visit("https://facebook.com/");
        cy.get("#email")
    })

    it("By Class", () => {
        cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
        cy.get(".DocSearch-Button-Placeholder")
    })

    it("By Tag", () => {
        cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
        cy.get("nav")
    })

    it("By Tag Value", () => {
        cy.visit("https://facebook.com/");
        cy.get("[name='pass']")
    })

    it("By Different Tag", () => {
        cy.visit("https://facebook.com/");
        cy.get("[data-testid=\"open-registration-form-button\"][role=\"button\"]")
    })
    it("By Contains name", () => {
        cy.visit("https://next.privat24.ua");
        cy.get("*[class^=\"card\"]")
    })
})