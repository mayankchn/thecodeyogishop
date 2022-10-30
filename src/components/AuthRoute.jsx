import React from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "./Contexts"
import withProvider from "./withProvider"

// Component description
function AuthRoute({user,children}){
    if(user){
        return <Navigate to="/" />
    }
return children
}
export default withProvider(userContext)(AuthRoute)