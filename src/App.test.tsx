import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("ensure main body is rendered", () => {
  render(<App />);
  const mainDiv = screen.getByTestId("body-main");
  expect(mainDiv).toBeInTheDocument();
});
