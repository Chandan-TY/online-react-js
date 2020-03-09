import React from "react";

export default function Person(props) {
  const { singleperson } = props;
  console.log(props);
  return (
    <div
      onClick={() => {
        props.action(singleperson);
      }}
    >
      <h2>{singleperson.name}</h2>
    </div>
  );
}
