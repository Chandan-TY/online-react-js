import React, { Component } from "react";
import ProductContext from "../context-api/productContext";
export default class ProductFour extends Component {
 
static contextType = ProductContext;
  componentDidMount(){
      console.log(this)
  }
  render() {
    return (
      <div>
        <h1>{this.context.products[1]}</h1>
      </div>
    );
  }
}
