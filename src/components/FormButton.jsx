import React from "react"

// Component description
function FormButton({...rest}){
  // console.log(rest)
return (
    <button 
        {...rest}
        className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300">
    </button>
  )
}
export default FormButton