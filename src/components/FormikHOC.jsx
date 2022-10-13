import { useField } from "formik";
import React from "react";

function FormikHOC(IncomingComponent){
    function OutgoingComponent(props) {
        // console.log('props are ',props)
      
        const inputField = useField(props.name)
        // console.log('input field ',inputField)
      
        const [field, meta, helpers] = inputField
        // console.log('field is ',field)
        // console.log('meta is ',meta)
        // console.log('helpers is ',helpers)
      
        return (
            <IncomingComponent
              id={props.id}
              type={props.type}
              name={props.name}
              value={field.value}
              placeholder={props.placeholder}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={meta.error}
              touched={meta.touched}
            />
        );

      }
      return OutgoingComponent
}

export default FormikHOC;
