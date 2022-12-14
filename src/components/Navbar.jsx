import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { AiOutlineUser } from "react-icons/ai";


function Navbar(props) {
  console.log("Wohoo! I'm Navbar and running too...")
  return (
    <div className="bg-white py-5">
      <div className="flex flex-col items-center gap-4 w-4/5 mx-auto sm:flex-row sm:justify-between sm:w-4/5 sm:mx-auto">
        <Link to="/">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-black text-gray-500 uppercase tracking-wide sm:tracking-wider sm:text-xl lg:text-2xl">The CodeYogi Shop</h1>
            <p className="text-xs font-bold text-gray-400 tracking-wide sm:text-sm sm:tracking-wider lg:text-lg">Shop Your Coding Atire</p>
          </div>
        </Link>
        <div className='flex flex-col items-center gap-3 sm:flex-row sm:gap-5 sm:justify-center'>
        <Link to="/logged-in-user"><AiOutlineUser className='my-auto font-bold text-gray-500 text-3xl sm:text-4xl' /></Link>
        
        <Link to="/cart" className='relative'>
        <HiOutlineShoppingBag className="text-5xl text-gray-500">
        </HiOutlineShoppingBag>
        <span className="font-bold text-xs text-gray-500 absolute text-center right-1/2 left-1/3 top-1/2 bottom-1/2">{props.totalQuantity}</span>
        </Link>
        </div>
      </div>

    </div>
  );
}

export default memo(Navbar);