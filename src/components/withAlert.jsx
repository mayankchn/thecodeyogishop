import React from "react";
import { useContext } from "react";
import { alertContext } from "../App";

function withAlert(IncomingComponent){
    function OutgoingComponent(props){
        const {alert, setAlert,removeAlert} = useContext(alertContext)
        return <IncomingComponent {...props} alert={alert} setAlert={setAlert} removeAlert={removeAlert} />
    }
    return OutgoingComponent
}

export default withAlert