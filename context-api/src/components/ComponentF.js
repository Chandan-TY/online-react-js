import React from "react";
import { UserConsumer } from "../context-api/userContext";

export default function ComponentF() {
  return (
    <div>
      <UserConsumer>
        {name => {
          return <h1>{name}</h1>;
        }}
      </UserConsumer>
    </div>
  );
}
