import React from "react"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "../App"

// Component description
function AuthRoute({children}){
const {user,setUser} = useContext(userContext)
if(user){
    return <Navigate to="/" />
}
return children
}
export default AuthRoute