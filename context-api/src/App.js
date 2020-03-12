import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentD from "./components/ComponentD";
import { UserProvider } from "./context-api/userContext";
import ProductOne from "./components/ProductOne";
import { ProductProvider } from "./context-api/productContext";

export default class App extends Component {
  state = {
    products: ["Icecream", "Chocolate", "Cake", "Water"]
  };

  getProductInfo = (product, name) => {
    console.log(product);
    console.log(name);
    const products = [ ...this.state.products ];
    const updatedProducts = products.map(prod => {
      if (prod === product) {
        return name;
      } else {
        return prod;
      }
    });

    this.setState({
      products: updatedProducts
    });
  };
  render() {
    /*  return (
      <div className="App">  
        <UserProvider value="Ajay">
          <ComponentD />
        </UserProvider>
      </div>
    ); */
    const productInfo = {
      products: this.state.products,
      getProductInfo: this.getProductInfo
    };
    return (
      <div className="App">
        <ProductProvider value={productInfo}>
          <ProductOne />
        </ProductProvider>
      </div>
    );
  }
}
