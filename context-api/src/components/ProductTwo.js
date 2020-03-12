import React from "react";
import { ProductConsumer } from "../context-api/productContext";

export default function ProductTwo() {
  return (
    <div>
      <ProductConsumer>
        {info => {
          return (
            <ul>
              {info.products.map((product, index) => {
                return (
                  <li
                    onClick={() => {
                      info.getProductInfo(product,"Pen");
                    }}
                    key={index}
                  >
                    {product}
                  </li>
                );
              })}
            </ul>
          );
        }}
      </ProductConsumer>
    </div>
  );
}
