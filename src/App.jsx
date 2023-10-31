import React, { useState } from "react";
import NavComponent from "./components/NavComponent";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import CartPanel from "./components/CartPanel";
import "./App.css";

function App(props) {
  const { productDetails } = props;

  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    
    <div>
      <NavComponent
        productDetails={productDetails}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Header />
      <Section
        productDetails={productDetails}
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Footer />
    </div>
  );
}

export default App;