import React from "react";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Modal from "../../components/materialize/Modal";

describe("<Modal/>", () => {
  global["M"] = {
    Modal: { getInstance: elem => {}, init: elem => {} }
  };
  const button = <button>Test</button>;
  const content = "The modal is open";
  it("opens a modal when trigger is clicked", () => {
    const { getByText } = render(<Modal />);

    expect(getByText("Modal Header")).not.toBeVisible();

    fireEvent.click(getByText("Click Me!"));

    expect(getByText("Modal Header")).toBeVisible;

    fireEvent.click(getByText("Agree"));

    expect(getByText("Modal Header")).toBeNull;
  });
});

// it("opens when trigger is clicked", () => {
//   const { getByText } = render(<Modal trigger={button}>{content}</Modal>);

//   expect(getByText(content)).toBeNull;

//   fireEvent.click(getByText("Test"));

//   expect(getByText(content)).toBe("The modal is open");
// });
