'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            setCurrentDateTime(
                now.toLocaleDateString("en-US", options) + " " + now.toLocaleTimeString("en-US", { hour12: false })
            );
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        
        <header
    
         className="text-slate-400 body-font shadow-lg ">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <div className="flex-1 text-black  flex flex-items items-center">
                    {/* Logo Image */}
                   <div className=" font-serif fond-extrabold text-emerald-950 text-xl w-15 h-8 mr-4 sm:mr-16 " >
                    ITS CAUSUAL
                   </div>
                    {/* Date and Time */}
                <span>{currentDateTime}</span>
            </div>
            <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
                <Link href={"http://localhost:3000/"} className="mr-5 hover:text-emerald-700 transations-colors duration-300 transfrom hover:scale-105" >
                {""}
                 Home{""} 
                 </Link>

                 <Link href={"http://localhost:3000/"} className="mr-5 hover:text-emerald-700 transations-colors duration-300 transfrom hover:scale-105" >
                {""}
                 About{""} 
                 </Link>

                 <Link href={"http://localhost:3000/"} className="mr-5 hover:text-emerald-700 transations-colors duration-300 transfrom hover:scale-105" >
                {""}
                 Blog{""} 
                 </Link>

                 <Link href={"http://localhost:3000/"} className="mr-5 hover:text-emerald-700 transations-colors duration-300 transfrom hover:scale-105" >
                {""}
                 Contact us{""} 
                 </Link>
                </nav>

<button className="inline-flex items-center  bg-emerald-900 hover:bg-green-800 boader-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0 transition-colors duration-300 ">
instagram
<svg
fill="none"
stroke="currentColor"
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
className="w-4 h-4 ml-1"
viewBox="0 0 24 24"
>
    <path d="M5 12h14M12 5l7 7-7 7"/>


</svg>
</button>



            </div>
        </header>
    );
}
