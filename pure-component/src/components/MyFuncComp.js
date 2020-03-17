import React from "react";

function MyFuncComp(props) {
  console.log("MyFuncComp rendering");
  return (
    <>
      <h1>Name - {props.username}</h1>
    </>
  );
}

export default React.memo(MyFuncComp);
