import React from "react";
import FormikHOC from "./FormikHOC";

function Input(props) {
// console.log('In Input : ',props)

let borderClass = "border-2 border-gray-400 rounded focus:outline-none focus:ring focus:ring-green-300"
  
if(props.error && props.touched){
  borderClass="border-2 border-red-400 rounded focus:outline-none focus:ring focus:ring-red-300 :"
}
  return (
    <>
      <label htmlFor={props.id} className="sr-only">{props.id}</label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={
          "border-2 border-gray-400 rounded py-2 indent-2 w-full" +
          " " +
          borderClass
        }
      />
      {props.touched && props.error && (
        <div className="px-2 text-red-400 font-semibold">{props.error}</div>
      )}
    </>
  );
}

export const FormikInput = FormikHOC(Input);
export default Input;
