import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Link } from "react-router-dom";


function SignUpPage(){
    console.log('signup called')

    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        userName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8).required('Required')
    })

    function apiCall(){
        console.log(`data where name: ${formik.values.firstName+formik.values.lastName}, username: ${formik.values.userName}, email: ${formik.values.email}, and password: ${formik.values.password}`)
    }

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:''
        },
        onSubmit: apiCall,
        validationSchema: SignUpSchema,
    })

    return (
    <div className="w-full bg-white py-10 mx-2 mt-10 flex flex-col gap-10 sm:w-4/5 sm:mx-auto">
        <h1 className="mx-2 px-2 text-3xl font-black text-gray-500 text-center">Sign up</h1>
        <form
        onSubmit={formik.handleSubmit} 
        className="flex flex-col gap-5 py-10 px-5 w-4/5 text-gray-500 border-2 border-gray-500 rounded mx-auto sm:w-4/5 sm:max-w-lg">
            <label htmlFor="firstName"></label>
                <input 
                type="text"
                id="firstName"
                name="firstName"
                placeholder="first name"
                value={formik.values.firstName}
                className="border border-gray-400 rounded py-2 indent-2 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 />
            {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}
            <label htmlFor="lastName"></label>
                <input 
                type="text"
                id="lastName"
                name="lastName"
                placeholder="last name"
                value={formik.values.lastName}
                className="border border-gray-400 rounded py-2 indent-2 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 />
            {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}
            <label htmlFor="userName"></label>
            <input 
            id="userName"
            type="text"
            name="userName"
            value={formik.values.userName}
            placeholder="profile name"
            className="border border-gray-400 rounded py-2 indent-2 w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.userName && formik.errors.userName && <div>{formik.errors.userName}</div>}
            <label htmlFor="email"></label>
                <input 
                type="email" 
                id="email"
                name="email"
                placeholder="email"
                value={formik.values.email}
                className="border border-gray-400 rounded py-2 indent-2 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            <label htmlFor="password"></label>
                <input
                id="password"
                name="password"
                type="password" 
                placeholder="password"
                value={formik.values.password}
                className="border border-gray-400 rounded py-2 indent-2 w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

            <button 
            type="button"
            onClick={formik.resetForm}
            className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg">
                Reset
            </button>
            <button 
            type="submit"
            disabled={!(formik.isValid) || !(formik.dirty)}
            className="rounded px-5 py-2 bg-gray-500 text-white font-bold text-lg disabled:bg-gray-300">
                Create an account
            </button>
        </form>
        <p className="text-center text-gray-500 ">Already a user? <Link to="/signin" className="font-semibold underline uppercase">Login</Link></p>
    </div>
    )
}
export default SignUpPage