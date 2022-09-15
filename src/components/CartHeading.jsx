import React from "react";

export default function CartHeading() {
    return (
        <p className="border flex gap-1 justify-between font-bold flex-wrap items-center p-3">
            <span className="w-20"></span>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </p>
    )
}