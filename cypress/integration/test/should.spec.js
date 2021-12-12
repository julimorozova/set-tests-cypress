
//Should
//

describe("SHOULD", () => {
    it("SHOULD", () => {
        cy.visit("/mobile?lang=en");
        cy.get("[data-qa-node=\"amount\"]")
            .type(100)
            .should("have.value", 100)
            .and("be.visible")
    });

    it("EXPECT", () => {
        cy.visit("/mobile?lang=en");
        cy.get("[data-qa-node=\"amount\"]")
            .type(100).then(input => {
                expect(input).to.have.value(100)
        });
    });

    it("Check default value for deposits", () => {
        cy.visit("/deposit/open?lang=en");
        cy.get("[data-qa-value=\"UAH\"]")
            .should("be.checked")
    });

    it("Check is visible archive link", () => {
        cy.visit("/deposit/open?lang=en");
        cy.contains("Мої депозити")
            .trigger("mouseover")
            .get("#archiveDeposits")
            .should("be.visible")
    });

    it("Check is correct attr in button", () => {
        cy.visit("/?lang=en");
        cy.contains("Show cards")
            .should("have.attr", "type")
            .and("match", /button/)

    });

    it("Check is correct url", () => {
        cy.visit("/?lang=en");
        cy.url()
            .should("eq", "https://next.privat24.ua/?lang=en");
    });
});