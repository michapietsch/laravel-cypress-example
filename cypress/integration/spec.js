describe("Form", () => {
    before(() => {
        cy.exec("cp .env .env.backed_up_by_cypress");
        cy.exec("cp .env.cypress .env");
    });

    it("Guest can not view the form", () => {
        cy.visit("/form");
        cy.url().should("include", "/login");
    });

    after(() => {
        cy.exec("mv .env.backed_up_by_cypress .env");
    });
});
