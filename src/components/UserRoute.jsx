import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "../App"

// Component description
function UserRoute({children}){
    const {user,setUser} = useContext(userContext)
    if(!user){
        return (
            <Navigate to="/signin" />
        )
    }
return  children
}
export default UserRoute