// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getXsrfToken", () => {
    cy.visit("/")
        .getCookie("XSRF-TOKEN")
        .then(cookie => {
            cy.wrap(decodeURIComponent(cookie.value)).as("xsrf_token");
        });
});

Cypress.Commands.add("loginWithCredentials", credentials => {
    cy.getXsrfToken().then(() => {
        cy.get("@xsrf_token").then(xsrf_token => {
            cy.request({
                method: "POST",
                url: "/login",
                form: true,
                body: {
                    email: credentials.email,
                    password: credentials.password
                },
                headers: {
                    "X-XSRF-TOKEN": xsrf_token
                }
            });
        });
    });
});
