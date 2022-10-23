import React from "react"
import { useField } from "formik"
import Input from "./Input"
// Component description
function FormikInput({name,...rest}){

    const field = useField(name)
    // console.log('field : ',field)
    const [data,meta]=field
    const {value,onChange,onBlur}=data
    const {touched,error}=meta

    
return (
    <Input 
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        error={error}
        {...rest}
    />
  )
}
export default FormikInput