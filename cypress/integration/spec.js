describe("Form", () => {
    it("Guest can not view the form", () => {
        cy.visit("/form");
        cy.url().should("include", "/login");
    });
});
