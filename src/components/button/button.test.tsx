import { render, screen } from "@testing-library/react";
import Button from "./button.component";

test("check button renders correctly with props", async () => {
  const buttonLabel = "test-data";
  const testCallback = jest.fn();
  const buttonColor = "red";

  // render article item
  render(
    <Button label={buttonLabel} onClick={testCallback} color={buttonColor} />
  );

  // get button
  const button = screen.getByTestId("button");

  // expect button to have correct label
  expect(button).toHaveTextContent(buttonLabel);

  // expect button to have correct background color
  expect(button).toHaveStyle(`background-color: ${buttonColor};`);

  // click button
  button.click();

  // expect button callback to be called
  expect(testCallback).toBeCalledTimes(1);
});
