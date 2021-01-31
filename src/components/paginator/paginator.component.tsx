import React from "react";
import Button from "../button/button.component";

import "./paginator.scss";

interface PaginatorProps {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  totalNumPages: number;
}

const Paginator: React.FC<PaginatorProps> = ({
  pageNumber,
  setPageNumber,
  totalNumPages,
}) => (
  <div className="paginator-container">
    <Button
      className="paginator-container__prev-btn"
      disabled={pageNumber === 0}
      label="Prev"
      onClick={() => setPageNumber(pageNumber - 1)}
      color="#e91e63"
    />
    <Button
      className="paginator-container__next-btn"
      disabled={pageNumber === totalNumPages}
      label="Next"
      onClick={() => setPageNumber(pageNumber + 1)}
    />
    <p data-testid="paginator-display">
      Page {pageNumber + 1} of {totalNumPages}
    </p>
  </div>
);

export default Paginator;
