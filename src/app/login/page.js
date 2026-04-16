import { Building2, Users } from "lucide-react";
export default function LoginPage() {
  return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-bgMain">
            <div className="ml-5 mt-5 flex flex-col items-center">
                <h1 className="text-white font-semibold text-4xl mb-3 ">Authentication Pages</h1>
                <p className="text-gray-400 font-semibold mb-3">Preview login and registration pages</p>
            </div>

            <div className="flex justify-between w-full">
                
                
                <div className="group cursor-pointer rounded-4xl bg-bgCard w-[45%] mx-5 mt-15 p-5 transition hover:scale-[1.02]">
                    <Building2 className="text-purple-400 w-10 h-10 m-5" />
                    <h2 className="text-white group-hover:text-blue-400 transition font-semibold text-2xl mb-3 ml-5">Organization Login/Register</h2>
                    <p className="text-gray-400 font-semibold mb-3 ml-5">Admin Authentication Page with login and Registration</p>
                    <p className="text-gray-400 font-semibold mb-3 ml-5">Register your organization if you are a new user, or log in to continue.</p>
                    <p className="text-blue-400 font-semibold mb-3 mt-10 ml-5">Continue {"-->"}</p>
                </div>


                <div className="group cursor-pointer rounded-4xl bg-bgCard w-[45%] mx-5 mt-15 p-5 transition hover:scale-[1.02]">
                    <Users className="text-purple-400 w-10 h-10 m-5" />
                    <h2 className="text-white group-hover:text-blue-400 transition font-semibold text-2xl mb-3 ml-5">Employee Login</h2>
                    <p className="text-gray-400 font-semibold mb-3 ml-5">User Authentication Page with login</p>
                    <p className="text-gray-400 font-semibold mb-3 ml-5">Use your credentials to access your organization dashboard.</p>
                    <p className="text-blue-400 font-semibold mb-3 mt-10 ml-5">Continue {"-->"}</p>
                </div>


            </div>
        
        
        
        </div>
        
    
  );
}