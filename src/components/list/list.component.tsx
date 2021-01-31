import React from "react";
import Loading from "../loading/loading.component";

import "./list.scss";

interface ListProps {
  loading: boolean;
  children?: React.ReactNodeArray;
}

const _renderLoading = () => (
  <div className="loading-container">
    <Loading label="Loading Posts..." />
  </div>
);

const _renderTable = (children?: React.ReactNodeArray) =>
  children ? (
    <ul className="main-table">{children}</ul>
  ) : (
    <li>There is no data to display.</li>
  );

const List: React.FC<ListProps> = ({ children, loading }) =>
  loading ? _renderLoading() : _renderTable(children);

export default List;
