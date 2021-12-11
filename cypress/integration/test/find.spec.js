
// Find
// get the descendent DOM elements of a specific selector

// Eq
// get A DOM element at a specific index in an array of elements.

describe("FIND", () => {

    it("Using get with find and eq", () => {
        cy.visit("/deposit/open");
        cy.get("tbody").find("td").find("div").find('button').eq(0)
    })

    it("Using get with find and eq", () => {
        cy.visit("");
        cy.get(".root_jtucT4MASf").find("div").eq(2).find("div").find('div').click()
    })
})
