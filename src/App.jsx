import React, { useState, useEffect, createContext } from "react";
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
import axios from "axios";
import Loading from "./components/Loading";
import AuthRoute from "./components/AuthRoute";
import UserRoute from "./components/UserRoute";
import LoggedInUser from "./components/LoggedInUser";

export const userContext = createContext()

function App() {
  console.log("Alright! This is App Component and is running...");

  const [ user, setUser ] = useState()
  console.log('logged in user ',user)

  const [ load, setLoad ] = useState(true)

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

  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me",{
        headers:{
          Authorization:token
        },
      }).then((response)=>{
        setUser(response.data)
        setLoad(false)
      });
    }else{
      setLoad(false)
    }
  },[token])

  if(load){
    return <Loading />
  }

  return (
    <div className="bg-gray-100">
      <userContext.Provider value={{user,setUser}}>
      <Navbar totalQuantity={totalQuantity} token={token} />
      <Routes>
        <Route index element={<UserRoute><ProductList /></UserRoute>} />
        <Route
          path="/productdetail/:id/"
          element={<ProductDetail onCartChange={handleCartChange} />}
        />
        <Route path="/cart" element={<UserRoute><CartList cartItems={cart} setCart={setCart} /></UserRoute>} />
        <Route path="/logged-in-user" element={<UserRoute><LoggedInUser user={user} setUser={setUser} token={token}/></UserRoute>} />
        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<AuthRoute user={user}><SignUpPage setUser={setUser} /></AuthRoute>}/>
        <Route path="/signin" element={<AuthRoute user={user}><SignInPage setUser={setUser} /></AuthRoute>}/>
        <Route path="/forgot" element={<ForgotPage/>}/>
      </Routes>
      <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
