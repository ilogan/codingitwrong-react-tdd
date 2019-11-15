describe("adding a dish", () => {
  it("displays the dish in the list", () => {
    const restaurantName = "Sushi Place";
    const dishName = "Volcano Roll";
    const restaurantName2 = "Burger Place";
    const dishName2 = "Mega Burger";

    cy.visit("http://localhost:1234");

    addRestaurant(restaurantName);
    goToRestaurantPage(restaurantName);
    modalNotShownAtStart();
    modalAllowsAddingDish(dishName);
    dishesRetainedWhenLeavingPage(restaurantName, dishName);
    dishesStoredPerRestaurant(restaurantName2, dishName, dishName2);
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
  cy.contains("Back").click();
};

const dishesStoredPerRestaurant = (
  restaurantName,
  absentDishName,
  dishName
) => {
  cy.contains("Add restaurant").click();
  cy.get(".modal input").type(restaurantName, { force: true });
  cy.get(".modal")
    .contains("Save")
    .click();
  cy.contains(restaurantName).click();
  cy.contains(absentDishName).should("not.exist");
  cy.contains("Add dish").click();
  cy.get(".modal input").type(dishName, { force: true });
  cy.get(".modal")
    .contains("Save")
    .click();
  cy.contains(dishName);
  cy.contains("Back").click();
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
