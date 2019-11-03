describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const restaurantName = "Sushi Place";

    // user visits url to add a new restaurant to a list
    cy.visit("http://localhost:1234");

    // user does not see a form for adding a restaurant
    cy.get("[data-testid='newRestaurantName']").should("not.exist");

    // they click add restaurant button to get started
    cy.get("[data-testid='addRestaurantButton']").click();

    // an input box pops up, so they enter the name of their favorite sushi place
    cy.get("[data-testid='newRestaurantName']").type(restaurantName);

    // they click save
    cy.get("[data-testid='saveNewRestaurantButton']").click();

    // the form disappears
    cy.get("[data-testid='newRestaurantName']").should("not.exist");

    // and user confirms that their restaurant is displayed
    cy.contains(restaurantName);
  });
});
