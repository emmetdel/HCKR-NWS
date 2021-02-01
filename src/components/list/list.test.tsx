import { render, screen } from "@testing-library/react";
import List from "./list.component";

let loading = true;
const children = [
  <li key={1}>Test Item 1</li>,
  <li key={2}>Test Item 2</li>,
  <li key={3}>Test Item 3</li>,
];

test("check list loader renders correctly", () => {
  // render list
  render(<List loading={loading}>{children}</List>);

  // get list components
  const listLoader = screen.getByTestId("list-loader");

  // expect loader to be displayed first
  expect(listLoader).toBeInTheDocument();
});

test("check list renders correctly", () => {
  // set loading to false
  loading = false;

  // render list
  render(<List loading={loading}>{children}</List>);

  // expect list to be displayed and loader not
  const listTable = screen.getByTestId("list-main-table");
  expect(listTable).toBeInTheDocument();
});
