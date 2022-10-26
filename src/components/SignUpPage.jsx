// import { useFormik } from "formik";
// import { Formik, Form } from "formik";
import { withFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Link, Navigate } from "react-router-dom";
import FormButton from "./FormButton";
import Input from "./Input";
import FancyInput from "./FancyInput"
import axios from "axios";
import withUser from "./withUser";

function callApi(values,bag){
    // console.log(`data sent with fullName:${values.fullName}, email:${values.email} and password:${values.password}`)
    console.log(bag,values)
    axios.post("https://myeasykart.codeyogi.io/signup", {
        fullName: values.fullName,
        email: values.email,
        password: values.password
    }).then((response)=>{
        const {token,user}=response.data
        // console.log('response by api ',user,token)
        localStorage.setItem("token", token)
        bag.props.setUser(user)
    }).catch(()=>{
        console.log("unable to signup.")
    })
}

const SingupSchema = Yup.object().shape({
    fullName: Yup.string().max(30,"Fullname must be 30 character or less").required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8,'must be 8 characters long').required('Required')
})

const initialValues = {
        fullName:"",
        email:"",
        password:""
}

function SignUpPage({values, errors, touched, handleSubmit, handleChange, handleBlur}){

    return (
    <div className="w-full bg-white py-10 mx-2 mt-10 flex flex-col gap-10 sm:w-4/5 sm:mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 py-10 px-5 w-4/5 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg"
            >
                <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Sign up</h1>
                <Input 
                    label="Your full name: "
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your fullname"
                    required
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.fullName}
                    error={errors.fullName}
                />
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
                <FancyInput 
                    label="Your password: "
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    error={errors.password}
                />
                <FormButton 
                type="submit"
                // disabled={!isValid}
                className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300">
                    Create an account
                </FormButton>
            </form>
        <p className="text-center text-gray-500 ">Already a user? <Link to="/signin" className="font-semibold underline uppercase">Login</Link></p>
    </div>
    )
}
const FormikSignup = withFormik({
    initialValues:initialValues,
    validationSchema:SingupSchema,
    handleSubmit:callApi
})(SignUpPage)

export default withUser(FormikSignup)
