import React from "react";
import ProductContext from "../context-api/productContext";

export default function ProductFive() {
  const context = React.useContext(ProductContext);
  const productInfo = () => {
    console.log(context);
  };
  return (
    <div>
      <button onClick={productInfo}>Function Component Context</button>
    </div>
  );
}
