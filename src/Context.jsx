import { createContext, useState } from "react";
import Home from "./Components/Home";
import CartPage from "./Components/CartPage";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Cart = createContext();

export const Context = () => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <Cart.Provider value={{ cartItem, setCartItem }}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Cart.Provider>
  );
};
