import React from "react"
import FormikHOC from "./FormikHOC"
// Component description
function FancyInput({id,label,name,error,touched,...rest}){
    
let borderClass = "border-2 rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
if(touched && error){
    borderClass = "border-2 rounded border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300"
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
                {(touched && error)?<div className="text-xs text-yellow-500 px-3 py-2 font-bold">{error}</div>:null}
    </div>
  )
}

export const FancyFormikInput = FormikHOC(FancyInput)

export default FancyInput