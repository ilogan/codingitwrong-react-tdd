describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const restaurantName = "Sushi Place";

    // user visits url to add a new restaurant to a list
    cy.visit("http://localhost:1234");

    // user clicks add restaurant button to get started
    cy.get("[data-testid='addRestaurantButton']").click();

    // an input box pops up, so they enter the name of their favorite sushi place
    cy.get("[data-testid='newRestaurantName']").type(restaurantName);

    // they click save
    cy.get("[data-testid='saveNewRestaurantButton']").click();

    // and confirm that their restaurant is displayed
    cy.contains(restaurantName);
  });
});
