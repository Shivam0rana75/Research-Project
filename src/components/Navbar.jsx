import SystemStatus from "./SystemStatus"
import SystemTime from "./SystemTime"
import { Bell, User } from "lucide-react";
import UserInfo from "./UserInfo";
export default function Navbar() {
  return (
    <div className="bg-bgCard w-full h-25 flex flex-row items-center justify-between px-6">
        
            <input
                type="text"
                placeholder={`Search incidents`}
                className="bg-[#1a1f2e] placeholder:text-gray-600 py-2 text-left w-[20rem] px-2 text-gray-600 font-bold rounded-2xl"
                
            />

            <SystemStatus />

            <SystemTime />

            <div className="relative p-2 rounded-full hover:bg-white/5 cursor-pointer">
                <Bell size={20} className="text-gray-400" />

                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </div>

            <UserInfo  />

        
    </div>
)
}