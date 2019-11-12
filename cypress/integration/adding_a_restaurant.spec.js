describe("adding a restaurant", () => {
  // user visits url to add a new restaurant to a list

  it("displays the restaurant in the list", () => {
    cy.visit("http://localhost:1234");
    const restaurantName = "Sushi Place";

    modalNotShownAtStart();
    modalCanBeCancelled();
    modalDisplaysValidationErrors();
    modalAllowsAddingRestaurant(restaurantName);
  });
});

const modalNotShownAtStart = () => {
  // user does not see a form for adding a restaurant
  cy.get("[data-testid='newRestaurantName']").should("not.be.visible");
};

const modalCanBeCancelled = () => {
  // they click add restaurant button to get started
  cy.get("[data-testid='addRestaurantButton']").click();

  // a modal pops up and they click cancel
  cy.get(".modal")
    .contains("Cancel")
    .click();

  // the form disappears
  cy.get("[data-testid='newRestaurantName']").should("not.be.visible");
};

const modalDisplaysValidationErrors = () => {
  // they click add restaurant button to get started
  cy.get("[data-testid='addRestaurantButton']").click();

  // they don't type anything into the text field and hit save
  cy.get("[data-testid='saveNewRestaurantButton']").click();

  // they receive a validation error
  cy.get("[data-error='Cannot be blank']").should("be.visible");

  // click cancel
  cy.get(".modal")
    .contains("Cancel")
    .click();
};

const modalAllowsAddingRestaurant = restaurantName => {
  // they click add restaurant button to get started
  cy.get("[data-testid='addRestaurantButton']").click();

  // so they enter the name of their favorite sushi place
  cy.get("[data-testid='newRestaurantName']").type(restaurantName, {
    force: true
  });

  // they click save
  cy.get("[data-testid='saveNewRestaurantButton']").click();

  // the form disappears
  cy.get("[data-testid='newRestaurantName']").should("not.be.visible");

  // and user confirms that their restaurant is displayed
  cy.contains(restaurantName);
};
