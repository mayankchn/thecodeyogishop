import React from "react"
import { Navigate } from "react-router-dom"
import withUser from "./withUser"

// Component description
function AuthRoute({user,children}){
    if(user){
        return <Navigate to="/" />
    }
return children
}
export default withUser(AuthRoute)