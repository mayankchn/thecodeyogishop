import React from "react";
import { Link } from "react-router-dom";
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import {FormikInput} from "./Input";

function SignInPage(){

    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).required('Required')
      });

    function callApi(){
        console.log('data sent ')
    }

    const initialValues = {
        email:'',
        password:''
    }

    return (
        <div className="flex flex-col gap-10 w-full bg-white py-10 mx-2 mt-10 sm:w-4/5 sm:mx-auto">
            <Formik initialValues={initialValues} validationSchema={SigninSchema} onSubmit={callApi}>
            <Form 
            className="flex flex-col gap-5 py-10 px-5 w-5/6 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg">
                <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Sign in</h1>
                <FormikInput 
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                />
                <FormikInput 
                id="password"
                type="password" 
                name="password"
                placeholder="Enter password"
                />
                <button 
                type="submit"
                className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300 ">
                    Login
                </button>
            </Form>
            </Formik>
            <div className="flex flex-col gap-5 self-center sm:flex-row">
                <p className="text-center text-gray-500">Forgot your <Link to="/forgot" className="font-semibold underline uppercase">password</Link>?</p>
                <p className="text-center text-gray-500 ">New here? <Link to="/signup" className="font-semibold underline uppercase">sign up</Link></p>
            </div>
        </div>
    )
}
export default SignInPage