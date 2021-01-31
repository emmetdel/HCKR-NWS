import { render, screen } from "@testing-library/react";
import Paginator from "./paginator.component";

test("check paginator work correctly", async () => {
  const pageNumber = 1;
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
  paginatorNext.click();
  expect(setPageNumber).toBeCalledTimes(1);

  // expect page number to increase
  expect(paginatorDisplay).toHaveTextContent(
    `Page ${pageNumber + 1} of ${totalNumPages}`
  );

  // expect button callback to be called
  // click previous
  paginatorPrev.click();
  expect(setPageNumber).toBeCalledTimes(2);

  // expect page number to decrease
  expect(paginatorDisplay).toHaveTextContent(
    `Page ${pageNumber + 1} of ${totalNumPages}`
  );
});
