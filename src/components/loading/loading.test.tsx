import { render, screen } from "@testing-library/react";
import Loading from "./loading.component";

test("check loading render correctly", () => {
  let label = "test Loading label...";

  // render loading item
  render(<Loading label={label} />);

  // get loader
  const loader = screen.getByTestId("loader");

  // expect loader to have correct label
  expect(loader).toHaveTextContent(label);
});
