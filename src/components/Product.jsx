import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

function Product({ thumbnail, category, title, price, id }) {
  console.log("Product running...")
  // flex flex-col items-start border-2 border-red-300
  return (
    <Link to={"/productdetail/" + id}>
      <div className="flex flex-initial flex-col items-start justify-start w-48 sm:w-60 sm:h-80">
        <img src={thumbnail} className="w-48 object-cover aspect-square sm:w-60" />
        <div className="flex flex-col px-2">
          <p className="text-xs text-gray-400 font-bold">{category}</p>
          <h2 className="font-bold text-sm text-gray-500">{title}</h2>
          <p className="text-xs font-bold text-gray-500">Rs.{price}</p>
        </div>
      </div>
    </Link>
  );
}

export default memo(Product);
