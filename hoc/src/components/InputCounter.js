import React from "react";
import withCounter from "../hoc/withCounter";

function InputCounter(props) {
  const { count, incrementCount } = props;
  return (
    <>
      <input value={count} onChange={incrementCount} />
    </>
  );
}
export default withCounter(InputCounter);
