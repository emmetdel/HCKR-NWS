import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header.component";

test("ensure header is rendered", () => {
  const setPageSize = jest.fn();
  const setStoryType = jest.fn();
  const selectedStoryType = "top";
  const selectedPageSize = 1;

  render(
    <Header
      selectedPageSize={selectedPageSize}
      selectedStoryType={selectedStoryType}
      setPageSize={setPageSize}
      setStoryType={setStoryType}
    />
  );
  const header = screen.getByTestId("main-header");
  expect(header).toBeInTheDocument();
});
