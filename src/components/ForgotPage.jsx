import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {FormikInput} from "./Input";

function ForgotPage(){

    const ForgotPasswordSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
      });

    const initialValues = {
        email:'',
    }

    function callApi(){
        console.log('password sent on your email...')
    }

    return (
        <div className="flex flex-col gap-10 w-full bg-white py-10 mx-2 mt-10 sm:w-4/5 sm:mx-auto">
            <Formik initialValues={initialValues} validationSchema={ForgotPasswordSchema} onSubmit={callApi}>
            <Form 
            className="flex flex-col gap-10 py-10 px-5 w-5/6 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg">
                <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Reset password</h1>
                <FormikInput 
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                  />
                <button 
                type="submit"
                className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300 ">
                    Submit
                </button>
            </Form>
            </Formik>
            <p className="text-center text-gray-500"> Back to <Link to="/signin" className="font-semibold underline uppercase">Sign in</Link></p>
        </div>
    )
}
export default ForgotPage