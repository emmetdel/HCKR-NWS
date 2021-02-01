import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./dropdown.component";

test("check dropdown functionality", async () => {
  const label = "Test Dropdown";
  const options = ["test1", "test2", "test3"];
  const selectedOption = options[1];
  const testCallback = jest.fn();

  // render dropdown item
  render(
    <Dropdown
      label={label}
      options={options}
      selectCallback={testCallback}
      selectedOption={selectedOption}
    />
  );

  // get items
  const labelItem = screen.getByTestId("dropdown-label");
  const select = screen.getByTestId("dropdown-select");

  // expect selected option be default
  expect(select).toHaveValue(selectedOption);

  // expect label to have correct label
  expect(labelItem).toHaveTextContent(label);

  // click select
  fireEvent.change(select, {
    target: { value: options[2] },
  });

  // expect value to be updated
  expect(select).toHaveValue(options[2]);
});
