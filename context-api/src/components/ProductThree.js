import React, { Component } from "react";
import { UserConsumer } from "../context-api/userContext";
import ProductContext from "../context-api/productContext";

export default class ProductThree extends Component {

  productInfo = () => {
    console.log(this.context.products[0]);
  };
  render() {
    return (
      <div>
        <h1>{this.context.products[2]}</h1>
        <button onClick={this.productInfo}>Invoke ProductInfo</button>
      </div>
    );
  }
}

ProductThree.contextType = ProductContext;
