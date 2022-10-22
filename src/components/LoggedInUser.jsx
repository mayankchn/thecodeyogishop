import React from "react"
import { AiOutlineUser } from "react-icons/ai";

// Component description
function LoggedInUser({user,setUser}){
    console.log('user is ',user)
return (
    <div>
        <div className="h-screen w-4/5 mx-auto bg-white">
          <div className="my-10 border">
          <div className="flex items-center justify-center gap-5 max-w-xl mx-auto my-10">
            <AiOutlineUser className="text-4xl border"></AiOutlineUser>
            <p className="flex flex-col"><span>Hello,</span><span className="font-bold text-xl">{user.full_name}</span></p>
          </div>
        </div>
        </div>
    </div>
  )
}
export default LoggedInUser