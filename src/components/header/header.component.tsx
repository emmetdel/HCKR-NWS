import React from "react";
import Dropdown from "../dropdown/dropdown.component";

import "./header.scss";

interface HeaderProps {
  setStoryType: (type: "top" | "new") => void;
  setPageSize: (size: number) => void;
  selectedPageSize: number;
  selectedStoryType: string;
}

const Header: React.FC<HeaderProps> = ({
  setStoryType,
  setPageSize,
  selectedPageSize,
  selectedStoryType,
}) => (
  <header data-testid="main-header">
    <h1 id="main-logo">HCKR/NWS</h1>
    <div id="dropdown-container">
      <Dropdown
        label="Story Type"
        options={["top", "new"]}
        selectCallback={setStoryType}
        selectedOption={selectedStoryType}
      />
      <Dropdown
        label="Page Size"
        options={[10, 30, 50, 100, 500]}
        selectCallback={setPageSize}
        selectedOption={selectedPageSize}
      />
    </div>
  </header>
);

export default Header;
