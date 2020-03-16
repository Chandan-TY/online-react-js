import React from "react";
import ButtonCounter from "./ButtonCounter";
import MouseCounter from "./MouseCounter";
import InputCounter from "./InputCounter";

export default function ParentComp() {
  return (
    <>
      <ButtonCounter />
      <hr />
      <MouseCounter name="Ajay" />
      <hr />
      <InputCounter />
    </>
  );
}
