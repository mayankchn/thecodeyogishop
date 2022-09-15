import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="mt-10 w-4/5 mx-auto bg-white h-screen">
      <div className="h-screen text-gray-400 text-4xl font-bold flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
      </div>
    </div>
  )
}