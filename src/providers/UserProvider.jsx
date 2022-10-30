import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import { userContext } from "../components/Contexts";

function UserProvider({children}){
    const [ user, setUser ] = useState()

    const [ load, setLoad ] = useState(true)

    const token = localStorage.getItem("token")

    useEffect(()=>{
      if(token){
        axios.get("https://myeasykart.codeyogi.io/me",{
          headers:{
            Authorization:token
          },
        }).then((response)=>{
          setUser(response.data)
          setLoad(false)
        }).catch(()=>{
          localStorage.removeItem("token")
          setLoad(false)
        })
      }else{
        setLoad(false)
      }
    },[token])
  
    if(load){
      return <Loading />
    }

    return <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>

}

export default UserProvider