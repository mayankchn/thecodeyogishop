import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ForgotPage(){

    const ForgotPasswordSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
      });

    const formik = useFormik({
        initialValues:{
            email:'',
        },
        onSubmit: callApi,
        validationSchema: ForgotPasswordSchema,
    })

    function callApi(){
        console.log('email sent ', formik.values.email)
    }

    return (
        <div className="flex flex-col gap-10 w-full bg-white py-10 mx-2 mt-10 sm:w-4/5 sm:mx-auto">
            <form 
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-10 py-10 px-5 w-5/6 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg">
                <label htmlFor="email"></label>
                <input 
                id="email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter email"
                className="border-2 border-gray-500 rounded w-full py-2 indent-2"
                  />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                <button
                type="button"
                onClick={formik.resetForm}
                className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg"
                >
                    Reset
                </button>
                <button 
                type="submit"
                disabled={!(formik.isValid)|| !(formik.dirty)}
                className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300 ">
                    Login
                </button>
            </form>
            <p className="text-center text-gray-500">Jump back to <Link to="/signin" className="font-semibold underline uppercase">Sign in</Link></p>
        </div>
    )
}
export default ForgotPage