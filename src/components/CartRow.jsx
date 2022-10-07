import React from "react";
import { FiX } from "react-icons/fi";


export default function CartRow(props) {
    // console.log('In cartRow componenet: ',props)
    
    return (
        <div className="border flex flex-col justify-center px-2 text-gray-500 lg:flex-row lg:justify-between lg:items-center">
            <p className="border flex justify-between px-2 py-4 lg:border-0" onClick={()=>props.handleDelete(props.product.id)}><FiX className="border-2 border-gray-500 lg:font-bold rounded-full text-xl text-gray-500"/></p>
            <p className="border py-1 sm:hidden lg:block lg:border-0">
            <img src={props.product.thumbnail} className="w-20 h-20 object-cover mx-auto" />
            </p>
            <p className="border flex justify-between px-2 py-4 lg:border-0"><span className="font-semibold lg:font-bold lg:hidden lg:border-0">Product:</span><span className="font-semibold lg:font-bold">{props.product.title}</span></p>
            <p className="border flex justify-between px-2 py-4 lg:border-0"><span className="font-semibold font-bold lg:hidden lg:border-0">Price:</span><span className="font-semibold lg:font-bold">${props.product.price}</span></p>
            <p className="border flex justify-between px-2 py-4 lg:border-0"><span className="font-semibold lg:font-bold lg:hidden lg:border-0">Quantity:</span>
            <input 
            className="border px-3 py-1 w-20 rounded"
            type="number"
            value={props.quantity}
            id={props.product.id}
            onChange={props.handleChange}
            /></p>
            <p className="border flex justify-between px-2 py-4 lg:border-0"><span className="font-semibold lg:font-bold  lg:hidden lg:border-0">Subtotal:</span><span className="font-semibold lg:font-bold">${props.quantity*props.product.price}</span></p>
        </div>
    )
}