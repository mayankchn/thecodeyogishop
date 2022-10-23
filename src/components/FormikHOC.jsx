import React from "react"
import { useField } from "formik"

// Component description
function FormikHOC(IncomingComponent){
    function OutgoingComponent({name,...rest}){

        const field = useField(name)
        // console.log('field : ',field)
        const [data,meta]=field
        const {value,onChange,onBlur}=data
        const {touched,error}=meta
    
        
    return (
        <IncomingComponent 
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
return OutgoingComponent
}
export default FormikHOC