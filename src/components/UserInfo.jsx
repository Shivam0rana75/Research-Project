import { User } from "lucide-react";
export default function UserInfo(){
    return (
        <div className="flex flex-row space-between items-center gap-4">

            <div className="flex flex-col">
                <p className="text-gray-300 font-sans font-bold">Shivam Rana</p>
                <p className="text-gray-500 font-sans">SWE Analyst , Level 3</p>
            </div>

            <div className=" bg-cyan-600 hover:bg-cyan-500 transition-all duration-200 p-3 rounded-2xl flex items-center justify-center cursor-pointer">
                <User size={20} className="text-white" />
            </div>


        </div>
    )
}