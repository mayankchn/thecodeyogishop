import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
    <div className="bg-white py-5">
      <div className="relative flex flex-col items-center gap-4 w-4/5 mx-auto sm:flex-row sm:justify-between sm:w-4/5 sm:mx-auto">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="font-black text-gray-500 uppercase tracking-wide sm:tracking-wider sm:text-xl lg:text-2xl">The CodeYogi Shop</h1>
          <p className="text-xs font-bold text-gray-400 tracking-wide sm:text-sm sm:tracking-wider lg:text-lg">Shop Your Coding Atire</p>
        </div>
        <Link to="/cart">
        <HiOutlineShoppingBag className="text-5xl text-gray-400 lg:text-6xl">
        </HiOutlineShoppingBag>
        </Link>
        <span className="font-bold text-xs text-gray-500 absolute bottom-2.5 sm:right-4 sm:bottom-2.5 lg:right-6 lg:bottom-3.5">{props.totalQuantity}</span>
      </div>

    </div>
  );
}

export default Navbar;