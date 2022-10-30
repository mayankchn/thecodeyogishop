import React from "react";
import { useState } from "react";
import { alertContext } from "../components/Contexts";

function AlertProvider({children}){
    const [alert, setAlert] = useState()

    function removeAlert(){
      setAlert(undefined);
  }
  
    return <alertContext.Provider value={{alert,setAlert,removeAlert}}>{children}</alertContext.Provider>

}

export default AlertProvider