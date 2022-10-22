import React from "react";
// import { useFormik } from "formik";
// import { Formik, Form } from "formik";
import { withFormik } from "formik";
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import Input from "./Input";

function callApi(values){
    console.log(`data sent to email ${values.email}`)
}

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required')
})

const initialValues = {
    email:""
}

function ForgotPage({values, touched, errors, handleChange,handleBlur, handleSubmit}){

    return (
        <div className="flex flex-col gap-10 w-full bg-white py-10 mx-2 mt-10 sm:w-4/5 sm:mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-10 py-10 px-5 w-5/6 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg"
            >
                <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Reset password</h1>
                <Input 
                    label="Your email: "
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    error={errors.email}
                />
                <FormButton 
                    type="submit"
                    // disabled={!isValid}
                    className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300 "
                >
                    Submit
                </FormButton>
            </form>
            <p className="text-center text-gray-500"> Back to <Link to="/signin" className="font-semibold underline uppercase">Sign in</Link></p>
        </div>
    )
}
const myHOC = withFormik({
    initialValues:initialValues,
    validationSchema:ForgotPasswordSchema,
    handleSubmit:callApi
})
const EasyForgotPage = myHOC(ForgotPage)
export default EasyForgotPage