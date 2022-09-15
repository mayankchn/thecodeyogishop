import React from "react";

export default function CartBottom() {
    return (
        <div className="border flex flex-wrap justify-between px-5">
            <div className="border flex flex-wrap gap-2">
                <input type="number" placeholder="Coupon code" className="w-32 rounded-xs border px-2 py-1"/>
                <button className="px-2 py-1 font-semibold rounded-xs text-white bg-gray-400 uppercase">Apply Coupon</button>
            </div>
            <button className="px-2 py-1 font-semibold rounded-xs text-white bg-gray-400 uppercase">Update Cart</button>
        </div>
    )
}