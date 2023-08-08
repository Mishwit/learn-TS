import React from "react";

import "./styles.css";

export type Props = {
  type: "button" | "submit";
  placeholder: string;
};

export const Input: React.FC<Props> = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder}></input>
);
