import React from "react";
// import { useFormik } from "formik";
import { withFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import Input from "./Input";
import FancyInput from "./FancyInput";
import axios from "axios";
import withUser from "./withUser";

function callApi(values, bag){
    console.log('data sent ',values.email,values.password)
    console.log('in bag of signin ',bag)
    axios.post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password
    }).then((response)=>{
        const {token,user}=response.data
        // console.log('response by api ',user)
        localStorage.setItem("token", token)
        bag.props.setUser(user)
    }).catch(()=>{
        console.log("unable to login.")
    })
}

let LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8,'must be 8 characters long').required('Required')
})

const initialValues = {
        email:'',
        password:''
}

function SignInPage({values, errors, touched, handleChange,handleBlur,handleSubmit}){
    // console.log('values in props ',values,errors)
    return (
        <div className="flex flex-col gap-10 w-full bg-white py-10 mx-2 mt-10 sm:w-4/5 sm:mx-auto">
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-5 py-10 px-5 w-5/6 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg"
            >
                <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Sign in</h1>
                <Input
                    label="Your email: "
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
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
                    placeholder="Enter password"
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
                >
                 Login
                </FormButton>
            </form>
            <div className="flex flex-col gap-5 self-center sm:flex-row">
                <p className="text-center text-gray-500">Forgot your <Link to="/forgot" className="font-semibold underline uppercase">password</Link>?</p>
                <p className="text-center text-gray-500 ">New here? <Link to="/signup" className="font-semibold underline uppercase">sign up</Link></p>
            </div>
        </div>
    )
}

const FormikSignin =  withFormik({
    initialValues:initialValues,
    validationSchema:LoginSchema,
    handleSubmit:callApi
})(SignInPage)

export default withUser(FormikSignin)

