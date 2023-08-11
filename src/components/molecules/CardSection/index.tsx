import React from "react";
import { Card } from "../../atoms/Card";

import "./styles.css";

export type Props = {
  users: [{ name: string; age: number; city: string }];
};

export const CardSection: React.FC = (users) => (
  <div className="cardsWrapper">
    {users.map((user, index) => (
      <Card name={user.name} age={user.age} city={user.city} key={index} />
    ))}
  </div>
);
