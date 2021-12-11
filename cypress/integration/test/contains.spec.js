
// Contains
// find the first element containing some text

describe("CONTAINS", () => {
    it("By text", () => {
        cy.visit("/mobile?lang=en");
        cy.contains("Sign in");
    })

    it("By tag", () => {
        cy.visit("/mobile?lang=en");
        cy.contains("div", "Sign in");
    })

    it("By text and matchCase", () => {
        cy.visit("/mobile?lang=en");
        cy.contains("SIGN IN", {matchCase: false});
    })

    it("Get and contains", () => {
        cy.visit("/mobile?lang=en");
        cy.get("footer").contains("free from cell phones");
    })
})