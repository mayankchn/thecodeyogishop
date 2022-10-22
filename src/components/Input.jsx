import React from "react"
import FormikHOC from "./FormikHOC"
// Component description
function Input({id,label,name,error,touched,...rest}){
    
let borderClass = "border-2 rounded border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
if(touched && error){
    borderClass = "border-2 rounded border-red-300 focus:outline-none focus:ring focus:ring-red-300"
}

return (
    <div>
        <label htmlFor={id} className="sr-only">{label}</label>
                <input 
                id={id}
                name={name}
                {...rest}
                className={"rounded indent-2 py-3 w-full" + " " + borderClass}
                />
                {(touched && error)?<div className="text-xs text-red-500 px-3 py-2 font-bold">{error}</div>:null}
    </div>
  )
}

export const FormikInput = FormikHOC(Input)

export default Input