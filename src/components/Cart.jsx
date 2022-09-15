import React from "react";
import CartRow from "./CartRow";
import CartHeading from "./CartHeading";
import CartBottom from "./CartBottom";

export default function Cart(props) {
  console.log(Object.keys(props));
  return (
    <div className="h-screen mt-10 w-4/5 mx-auto bg-white flex flex-col">
      <div className="border flex flex-col gap-5 p-10">
        <CartHeading />
        <CartRow
          thumbnail="/img/earbuds.jpg"
          title="Earbuds"
          price={45}
          quantity={2}
        />
        <CartRow
          thumbnail="/img/iPhone.jpg"
          title="iPhone 6s"
          price={1000}
          quantity={1}
        />
        <CartBottom  />
      </div>
      <div className="border w-1/2 self-end mt-5 mr-10 flex flex-col">
        <span className="border font-bold font-bold text-gray-500 bg-gray-100 text-lg px-5 py-2">Cart total</span>
        <div className="border-b-2 flex gap-10 pb-2 m-5">
            <div className="flex flex-col gap-5 font-bold text-gray-500">
                <span>Subtotal</span>
                <span>Total</span>
            </div>
            <div className="flex flex-col gap-5 text-gray-500">
                <span>${90}</span>
                <span>${90+1000}</span>
            </div>
        </div>
        <button className="border-2 m-5 py-3 text-white bg-gray-400 rounded-xs font-bold uppercase">Proceed to checkout</button>
      </div>
    </div>
  );
}
