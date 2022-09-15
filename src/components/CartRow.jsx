import React from "react";

export default function CartRow (props) {
    return (
        <div>
            <p className="border flex gap-2 justify-between flex-wrap items-center px-5">
                <img src={props.thumbnail} className="w-20 h-20 object-cover" alt="img" />
                <span className="font-bold">{props.title}</span>
                <span className="font-bold">${props.price}</span>
                <span className="border px-2">{props.quantity}</span>
                <span className="font-bold">${props.price*props.quantity}</span>
            </p>
        </div>
    )
}