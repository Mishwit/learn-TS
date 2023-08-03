import React from "react";
import classNames from "classnames";

import "./styles.css";

export type Props = {
  onClick: () => void;
  text: string;
  type: "reset" | "button" | "submit" | undefined;
  variant?: "green" | "red" | "count" | "reset";
};

export const Button: React.FC<Props> = ({ onClick, text, type, variant }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames("button", {
      button_green: variant === "green",
      button_red: variant === "red",
      button_count: variant === "count",
      button_reset: variant === "reset",
    })}
  >
    {text}
  </button>
);
