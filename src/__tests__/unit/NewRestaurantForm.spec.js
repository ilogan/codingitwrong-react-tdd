import React from "react";
import { render, fireEvent } from "@testing-library/react";

import NewRestaurantForm from "../../NewRestaurantForm";

describe("<NewRestaurantForm/>", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", () => {
      const saveHandler = jest.fn();

      // look at https://testing-library.com/docs/guide-which-query for query dexisions
      // follow tut for now, but could be better to refactor at a later time
      const { getByTestId } = render(
        <NewRestaurantForm onSave={saveHandler} />
      );
      const restaurantName = "Sushi Place";

      fireEvent.change(getByTestId("newRestaurantName"), {
        target: { value: restaurantName }
      });

      fireEvent.click(getByTestId("saveNewRestaurantButton"));

      expect(saveHandler).toBeCalledWith(restaurantName);
    });
  });
});
