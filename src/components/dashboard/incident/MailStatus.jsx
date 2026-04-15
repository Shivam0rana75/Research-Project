import { Mail } from "lucide-react";

export default function MailStatus({ email }) {
  return (
    <div className="bg-[#1E293B] rounded-3xl w-4/5 ml-2 mt-5 p-6">
      <div className="flex items-center">
        <Mail className="text-blue-500" size={20} />
        <p className="ml-3 text-blue-500 text-sm font-medium">Email</p>
      </div>

      <p className="text-white text-sm font-semibold mt-2">
        {email}
      </p>
    </div>
  );
}