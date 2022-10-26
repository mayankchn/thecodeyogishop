import React ,{useEffect} from "react";
import {TiTickOutline} from "react-icons/ti"
import {HiOutlineXCircle} from "react-icons/hi"
import withAlert from "./withAlert";

function Alert({alert,setAlert,removeAlert}){
    // console.log('props in Alert ',props)

    useEffect(() => {
      if(alert){
        const timeout = setTimeout(removeAlert, 3*1000)    
      return () => {
        clearTimeout(timeout)
      }
    }
    }, [alert])
    

    if(!alert){
        return <></>;
    }
    const {type,message}=alert;
    console.log(`type: ${type},message: ${message}`)

    let color,Icon;
    if(type=="success"){
        color="bg-green-500";
        Icon=<TiTickOutline className="text-3xl text-white" />
    }
    if(type=="error"){
        color="bg-red-500";
        Icon=<HiOutlineXCircle className="text-3xl text-white" />
    }
    return (
        <div className="flex items-center justify-between gap-2 px-2 h-10 w-4/5 mx-auto bg-white text-gray-500 my-10">
            <div className="flex items-center gap-2">
                <div className={"border w-10 h-full " + color}>
                {Icon}
                </div>
                <div className="flex items-center gap-3">
                    <span className="font-bold uppercase">{type}!</span>
                    {message}
                </div>
            </div>
            <button 
                className="font-bold"
                type="button"
                onClick={removeAlert}
            >
                Dismiss
            </button>
        </div>
    )
}

export default withAlert(Alert);