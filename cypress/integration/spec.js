describe("Form", () => {
    before(() => {
        cy.exec("cp .env .env.backed_up_by_cypress");
        cy.exec("cp .env.cypress .env");
        cy.exec("php artisan migrate:fresh");
        cy.exec("php artisan db:seed --class CypressSeeder");
    });

    it("Guest can not view the form", () => {
        cy.visit("/form");
        cy.url().should("include", "/login");
    });

    it("The seeded user can login", () => {
        cy.visit("/login");
        cy.get("#email").type("some_user@example.com");
        cy.get("#password").type("somePassword");
        cy.get("button[type=submit]").click();
        cy.url().should("include", "/home");
    });

    after(() => {
        cy.exec("mv .env.backed_up_by_cypress .env");
    });
});
