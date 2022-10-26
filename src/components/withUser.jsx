import React from "react";
import { useContext } from "react";
import { userContext } from "../App";

function withUser(IncomingComponent){
    function OutgoingComponent(props){
        const {user, setUser} = useContext(userContext)
        return <IncomingComponent {...props} user={user} setUser={setUser} />
    }
    return OutgoingComponent
}

export default withUser