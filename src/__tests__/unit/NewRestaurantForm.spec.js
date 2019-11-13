import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "regenerator-runtime";

import NewRestaurantForm from "../../NewRestaurantForm";

describe("<NewRestaurantForm/>", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", async () => {
      const labelName = "Restaurant Name";
      const saveHandler = jest.fn();

      const userInput = "Sushi Place";

      // look at https://testing-library.com/docs/guide-which-query for query dexisions
      // follow tut for now, but could be better to refactor at a later time
      const { getByLabelText, getByText, findByLabelText } = render(
        <NewRestaurantForm onSave={saveHandler} />
      );

      const input = getByLabelText(labelName);

      fireEvent.change(input, {
        target: { value: userInput }
      });

      expect(input.value).toEqual(userInput);

      fireEvent.click(getByText("Save"));

      const updatedInput = await findByLabelText(labelName);

      expect(updatedInput.value).toEqual("");

      expect(saveHandler).toBeCalledWith(userInput);
    });
  });
});
