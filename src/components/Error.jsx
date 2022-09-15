import React from 'react'
import { Link } from "react-router-dom";

export default function Error(){
  return (
    <div className="mt-10 w-4/5 mx-auto bg-white h-screen">
      <div className="flex flex-col max-w-xs mx-auto pt-20 py-2 gap-5 sm:max-w-lg sm:items-center lg:max-w-xl lg:pt-10">
        <img src="/img/error-page-2.jpg"/>
        <Link to="/" className="bg-gray-200 text-gray-400 text-center font-semibold px-2 py-1 lg:px-5 lg:py-2 lg:font-bold">HOME</Link>
        </div>
    </div>
  )
}