import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import CartList from "./components/CartList";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import ForgotPage from "./components/ForgotPage";
import AuthRoute from "./components/AuthRoute";
import UserRoute from "./components/UserRoute";
import LoggedInUser from "./components/LoggedInUser";
import Alert from "./components/Alert";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";

function App() {
  console.log("Alright! This is App Component and is running...");

  const storedCartDataString = localStorage.getItem("cartData") || "{}";
  const storedCartData = JSON.parse(storedCartDataString);

  const [cart, setCart] = React.useState(storedCartData);

  function handleCartChange(productId, quantity) {
    setCart(function (prevCart) {
      const oldQuantity = prevCart[productId] || 0;
      const newQuantity = oldQuantity + quantity;

      const newCart = { ...prevCart, [productId]: newQuantity };
      return newCart;
    });
  }

  // to store cart data in browser
  localStorage.setItem("cartData", JSON.stringify(cart));

  const totalQuantity = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  return (
    <div className="bg-gray-100">
      <UserProvider>
      <AlertProvider>
      <Navbar totalQuantity={totalQuantity} />
      <Alert/>
      <Routes>
        <Route index 
        element={<UserRoute><ProductList /></UserRoute>} />
        <Route
          path="/productdetail/:id/"
          element={<ProductDetail onCartChange={handleCartChange} />}
        />
        <Route path="/cart"
         element={<UserRoute><CartList cartItems={cart} setCart={setCart} /></UserRoute>} />
        <Route path="/logged-in-user"
         element={<UserRoute><LoggedInUser/></UserRoute>} />
        <Route path="*" 
        element={<Error />} />
        <Route path="/signup" 
        element={<AuthRoute><SignUpPage /></AuthRoute>}/>
        <Route path="/signin" 
        element={<AuthRoute><SignInPage /></AuthRoute>}/>
        <Route path="/forgot" 
        element={<AuthRoute><ForgotPage/></AuthRoute>}/>
      </Routes>
      <Footer />
      </AlertProvider>
      </UserProvider>
    </div>
  );
}

export default App;
