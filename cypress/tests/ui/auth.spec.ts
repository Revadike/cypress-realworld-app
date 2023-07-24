const userInfo = {
  firstName: "Bob",
  lastName: "Ross",
  email: "bob.ross@example.com",
  password: "S3cret!!",
};

describe(
  "User Sign-up and Login",
  {
    baseUrl: "https://m-heezen-staging-21313.web.app/",
    testIsolation: true,
  },
  function () {
    it("should allow a visitor to sign-up and login", function () {
      cy.visit("/");

      // Sign-up, if needed
      // cy.contains("Inloggen").click();
      // cy.contains("Maak een account aan").click();
      // cy.contains("Voornaam *").next().type(userInfo.firstName);
      // cy.contains("Achternaam *").next().type(userInfo.lastName);
      // cy.contains("E-mailadres *").next().type(userInfo.email);
      // cy.contains("Herhaal e-mailadres *").next().type(userInfo.email);
      // cy.contains("Wachtwoord *").next().type(userInfo.password);
      // cy.contains("Herhaal wachtwoord *").next().type(userInfo.password);
      // cy.get("input[type=checkbox]").click({ force: true });
      // cy.contains("Registreren").click();
      // cy.wait(30000);

      // Login
      cy.contains("Inloggen").click();
      cy.contains("E-mailadres *").next().type(userInfo.email);
      cy.contains("Wachtwoord *").next().type(userInfo.password);
      cy.get('button[type="submit"]').click();
      cy.contains("Uitloggen").should("be.visible"); // Logout button is visible
      // clicking the logout button would log us out and fix next test, but test isolation should take care of that
    });

    // this always fails for me
    it("should redirect unauthenticated user to signin page", function () {
      cy.visit("/account/wachtwoord-wijzigen/"); // This page is only accessible to authenticated users
      cy.location("pathname").should("equal", "/inloggen/"); // Redirected to signin page
      cy.visualSnapshot("Redirect to SignIn");
    });
  }
);
