import React from "react"
import { Navigate, Route } from "react-router-dom"

// Component description
function UserRoute({user, children}){
    if(!user){
        return (
            <Navigate to="/signin" />
        )
    }
return  children
}
export default UserRoute