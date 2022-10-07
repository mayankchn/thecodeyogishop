import React from "react";

function Checkout({productList,cartItems}){
// console.log('In checkout : ',productList,cartItems)

    const quantities = Object.values(cartItems)

    let subTotal = 0
    for (let i = 0; i < productList.length; i++) {
        subTotal = subTotal + (productList[i].price*quantities[i]);
    }
    // console.log('subtotal is ',subTotal)
    
    return (
    <div className="py-5 mx-7">
    <p className="border-b-2 py-3 flex justify-between"><span className="font-semibold lg:font-bold">Total:</span><span className="font-semibold lg:font-bold">${subTotal}</span></p>
    <p className="border-b-2 py-3 flex justify-between"><span className="font-semibold lg:font-bold">Subtotal:</span><span className="font-semibold lg:font-bold">${subTotal}</span></p>
    </div>
    )
}

export default Checkout