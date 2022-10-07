import React, { useMemo } from "react";
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

function App() {
  console.log("Alright! This is App Component and is running...");

  const storedCartDataString = localStorage.getItem("cartData") || "{}";
  const storedCartData = JSON.parse(storedCartDataString);

  const [cart, setCart] = React.useState(storedCartData);

  function handleCartChange(productId, quantity) {
    // console.log(
    //   `productId: ${productId}, quantity: ${quantity} has added to cart`
    // );
    setCart(function (prevCart) {
      const oldQuantity = prevCart[productId] || 0;
      // console.log('old quantity: ',oldQuantity)
      const newQuantity = oldQuantity + quantity;
      // console.log('new quantity:',newQuantity)

      const newCart = { ...prevCart, [productId]: newQuantity };
      // console.log("new cart has ", newCart);
      return newCart;
    });
  }
  // to store cart data in browser
  localStorage.setItem("cartData", JSON.stringify(cart));

  const totalQuantity = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);
  // console.log("total items in cart: ", totalQuantity);

  // console.log("cart has ", cart);

  return (
    <div className="bg-gray-100">
      <Navbar totalQuantity={totalQuantity} />
      <Routes>
        <Route index element={<ProductList />} />
        <Route
          path="/productdetail/:id/"
          element={<ProductDetail onCartChange={handleCartChange} />}
        />
        <Route path="/cart" element={<CartList cartItems={cart} setCart={setCart} />} />
        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<SignUpPage />}/>
      <Route path="/signin" element={<SignInPage />}/>
      <Route path="/forgot" element={<ForgotPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
