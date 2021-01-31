import React from "react";

import "./button.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, onClick, color, disabled = false, ...props }) => (
  <button
    {...props}
    disabled={disabled}
    // sets the background color of btn, if disabled set to grey else set default blue
    style={{ backgroundColor: `${disabled ? "grey" : color ? color : "blue"}` }}
    data-testid="button"
    onClick={() => onClick()}
  >
    {label}
  </button>
);

export default Button;
