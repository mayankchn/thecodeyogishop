import { Formik, Form } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import {FormikInput} from "./Input";

function SignUpPage(){
    // console.log('signup called')

    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        userName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).required('Required')
    })

    function apiCall(){
        console.log("data sent...")
    }

    const initialValues = {
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:''
    }

    return (
    <div className="w-full bg-white py-10 mx-2 mt-10 flex flex-col gap-10 sm:w-4/5 sm:mx-auto">
        <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={apiCall}
            validateOnMount
        >
            
            <Form
            className="flex flex-col gap-5 py-10 px-5 w-4/5 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg">
                <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Sign up</h1>
                <FormikInput 
                type="text"
                id="firstName"
                name="firstName"
                placeholder="first name"
            />
            <FormikInput 
                label="lastName"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="last name"
            />
            <FormikInput 
                label="userName"
                type="text"
                id="userName"
                name="userName"
                placeholder="username"
            />
            <FormikInput 
                label="email"
                type="email"
                id="email"
                name="email"
                placeholder="your email"
            />
            <FormikInput 
                label="password"
                type="password"
                id="password"
                name="password"
                placeholder="your password"
            />
                <button 
                type="submit"
                className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300">
                    Create an account
                </button>
            </Form>
        </Formik>
        <p className="text-center text-gray-500 ">Already a user? <Link to="/signin" className="font-semibold underline uppercase">Login</Link></p>
    </div>
    )
}
export default SignUpPage