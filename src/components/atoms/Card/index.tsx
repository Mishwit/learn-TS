import React from "react";

import "./styles.css";

export type Props = {
  name: string;
  age: number;
  city: string;
};

export const Card: React.FC<Props> = ({ name, age, city }) => (
  <div className="card">
    <div className="user-card">
      <div className="user-info">{name}</div>
    </div>
    <div className="user-card">
      <div className="user-info">{age}</div>
    </div>
    <div className="user-card">
      <div className="user-info">{city}</div>
    </div>
  </div>
);
