import React from "react";
import { render } from "@testing-library/react";

import App from "../../App";

describe("<App/>", () => {
  it("renders hello word", () => {
    const { getByText } = render(<App />);
    getByText("Hello World");
  });
});
