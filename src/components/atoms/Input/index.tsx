import React from "react";

import "./styles.css";

export type Props = {
  type: "email" | "password";
  placeholder: string;
};

export const Input: React.FC<Props> = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder}></input>
);
