describe("adding a dish", () => {
  it("displays the dish in the list", () => {
    const restaurantName = "Sushi Place";
    const dishName = "Volcano Roll";

    cy.visit("http://localhost:1234");

    addRestaurant(restaurantName);
    goToRestaurantPage(restaurantName);
    modalNotShownAtStart();
    modalAllowsAddingDish(dishName);
    dishesRetainedWhenLeavingPage(restaurantName, dishName);
  });
});

const addRestaurant = restaurantName => {
  cy.contains("Add restaurant").click();
  cy.get(".modal input").type(restaurantName, { force: true });
  cy.get(".modal")
    .contains("Save")
    .click();
};

const dishesRetainedWhenLeavingPage = (restaurantName, dishName) => {
  cy.contains("Back").click();
  cy.contains(restaurantName).click();
  cy.contains(dishName);
};

const goToRestaurantPage = restaurantName => {
  cy.contains(restaurantName).click();
};

const modalNotShownAtStart = () => {
  cy.get(".modal").should("not.be.visible");
};

const modalAllowsAddingDish = dishName => {
  cy.contains("Add dish").click();
  cy.get(".modal input").type(dishName, { force: true });
  cy.get(".modal")
    .contains("Save")
    .click();
  cy.get(".modal").should("not.be.visible");
  cy.contains(dishName);
};
