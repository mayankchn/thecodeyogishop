import React from "react";
import { Link } from "react-router-dom";
import { Formik,useFormik } from "formik";
import * as Yup from 'yup';


function SignInPage(){

    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).required('Required')
      });

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit: callApi,
        validationSchema: SigninSchema,
    })

    function callApi(){
        console.log('data sent ',formik.values.email,formik.values.password)
    }

    return (
        <div className="flex flex-col gap-10 w-full bg-white py-10 mx-2 mt-10 sm:w-4/5 sm:mx-auto">
            <form 
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-5 py-10 px-5 w-5/6 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg">
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
                <label htmlFor="password"></label>
                <input 
                id="password"
                type="password" 
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter password"
                className="border-2 border-gray-500 rounded w-full py-2 indent-2" />
                {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div> }
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
            <div className="flex flex-col gap-5 self-center sm:flex-row">
                <p className="text-center text-gray-500">Forgot your <Link to="/forgot" className="font-semibold underline uppercase">password</Link>?</p>
                <p className="text-center text-gray-500 ">New here? <Link to="/signup" className="font-semibold underline uppercase">sign up</Link></p>
            </div>
        </div>
    )
}
export default SignInPage