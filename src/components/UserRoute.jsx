import React from "react"
import { Navigate } from "react-router-dom"
import withUser from "./withUser"

// Component description
function UserRoute({user,children}){
    if(!user){
        return <Navigate to="/signin" />
    }
return  children
}
export default withUser(UserRoute)