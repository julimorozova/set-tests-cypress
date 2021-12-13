it('type', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112233344)
});

it('focus', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
});

it('blur', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
});

it('clear', () => {
    cy.visit('/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear()
});