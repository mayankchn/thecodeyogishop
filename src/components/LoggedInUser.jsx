import React from "react"
import { AiOutlineUser } from "react-icons/ai";
import FormButton from "./FormButton";

// Component description
function LoggedInUser({user,setUser,token}){
    console.log('user is ',user)
    function handleLogout(){
      console.log('Logout handle clicked!')
      localStorage.removeItem('token')
      setUser(undefined)
    }
return (
    <>
        <div className="h-screen w-4/5 mx-auto bg-white my-10 py-20">
          <div className="h-96 max-w-xl mx-auto px-2 py-10">
            <div className="border-2 border-gray-300 rounded flex flex-col items-center max-w-xs mx-auto gap-5 py-10">
            <div className="flex gap-5 items-center">
            <AiOutlineUser className="text-5xl"></AiOutlineUser>
            <p className="flex flex-col"><span>Hello,</span><span className="font-bold text-xl">{user.full_name}</span></p>
            </div>
          <FormButton 
            type="button"
            onClick={handleLogout}
          >
              Logout
          </FormButton>
          </div>
          </div>
        </div>
    </>
  )
}
export default LoggedInUser