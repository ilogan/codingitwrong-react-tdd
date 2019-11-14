import React from "react";

import { render, fireEvent } from "@testing-library/react";
import "regenerator-runtime";

import NewDishForm from "../../NewDishForm";

describe("<NewDishForm/>", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", async () => {
      const labelName = "Dish Name";
      const saveHandler = jest.fn();

      const userInput = "Volcano Roll";

      const { getByLabelText, getByText, findByLabelText } = render(
        <NewDishForm onSave={saveHandler} />
      );

      const input = getByLabelText(labelName);

      fireEvent.change(input, { target: { value: userInput } });

      expect(input.value).toEqual(userInput);

      fireEvent.click(getByText("Save"));

      const updatedInput = await findByLabelText(labelName);

      expect(updatedInput.value).toEqual("");

      expect(saveHandler).toBeCalledWith(userInput);
    });
  });
});
