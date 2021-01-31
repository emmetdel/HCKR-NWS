import React from "react";

import "./dropdown.scss";

interface DropdownProps {
  label: string;
  options: any[];
  selectCallback: (option: any) => void;
  selectedOption: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectCallback,
  selectedOption,
}) => (
  <div className="dropdown-container">
    <label className="dropdown-container__label" data-testid="dropdown-label">
      {label}
    </label>
    <select
      className="dropdown-container__select"
      data-testid="dropdown-select"
      onChange={(evt) => selectCallback(evt.target.value as any)}
      defaultValue={selectedOption}
    >
      {options.map((option: any, i: number) => (
        <option
          className="dropdown-container__select__option"
          key={i}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
