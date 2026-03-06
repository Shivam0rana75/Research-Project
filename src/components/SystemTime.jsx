'use client'
import { useState , useEffect } from "react";
export default function SystemTime(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="flex flex-col py-2 ">
            <p className="text-gray-300 font-sans font-bold">System Time</p>

            <div className="flex text-gray-300 font-sans">
                {currentTime.toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                }).replace(",", " •")}
            </div>

        </div>
    )
}