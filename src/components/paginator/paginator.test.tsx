import { fireEvent, render, screen } from "@testing-library/react";
import Paginator from "./paginator.component";

test("check paginator work correctly", () => {
  let pageNumber = 0;
  const setPageNumber = jest.fn();
  const totalNumPages = 50;

  // render paginator item
  render(
    <Paginator
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      totalNumPages={totalNumPages}
    />
  );

  // get paginator display
  const paginatorDisplay = screen.getByTestId("paginator-display");
  const paginatorPrev = screen.getByText("Prev");
  const paginatorNext = screen.getByText("Next");

  // expect display to have correct label
  expect(paginatorDisplay).toHaveTextContent(
    `Page ${pageNumber + 1} of ${totalNumPages}`
  );

  // click next
  fireEvent.click(paginatorNext);
  expect(setPageNumber).toBeCalled();

  // expect button callback to be called
  // click previous
  fireEvent.click(paginatorPrev);
  expect(setPageNumber).toBeCalled();
});
