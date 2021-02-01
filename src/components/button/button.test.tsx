import { render, screen } from "@testing-library/react";
import Button from "./button.component";

const buttonLabel = "test-data";
const testCallback = jest.fn();
const buttonColor = "red";

test("check button renders correctly with props", () => {
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

test("check button not disable", () => {
  // render button
  render(
    <Button
      label={buttonLabel}
      onClick={testCallback}
      color={buttonColor}
      disabled={false}
    />
  );

  // get button
  const button = screen.getByTestId("button");

  // expect button to have correct label
  expect(button).toHaveTextContent(buttonLabel);

  // expect button to have correct background color
  expect(button).toHaveStyle(`background-color: ${buttonColor};`);

  // expect disabled attribute not to be present
  expect(button).not.toHaveAttribute("disabled");
});

test("check button disabled", () => {
  // render button
  render(
    <Button
      label={buttonLabel}
      onClick={testCallback}
      color={buttonColor}
      disabled={true}
    />
  );

  // get button
  const button = screen.getByTestId("button");

  // expect button to have correct label
  expect(button).toHaveTextContent(buttonLabel);

  // expect button to have correct background color
  expect(button).toHaveStyle(`background-color: grey;`);

  // expect disabled attribute not to be present
  expect(button).toHaveAttribute("disabled");
});
