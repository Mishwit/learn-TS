import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

import "./styles.css";

export const Form = () => (
  <form action="#" method="post">
    <Input type="submit" placeholder="E-mail" />
    <Input type="submit" placeholder="Password" />
    <Input type="submit" placeholder="Repeat password" />
    {/* <Button
      type="submit"
      text="Send"
      variant="red"
      onClick={() => alert("Thanks for authorized")}
    /> */}
    <Button
      type="submit"
      text="Send"
      variant="red"
      onClick={() => alert("Thanks for authorized")}
    />
  </form>
);
