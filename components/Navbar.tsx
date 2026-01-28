'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}
 const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[2px] 
                inline-block 
                bg-crimson
                absolute 
                left-0 
                -bottom-0.5 
                transition-[width]
                ease 
                duration-300
                ${pathname === href
                    ? 'w-full shadow-[0_0_15px_4px_rgba(27,27,27,0.6)]'
                    : 'w-0 shadow-none group-hover:w-full group-hover:shadow-[0_0_15px_4px_rgba(27,27,27,0.6)]'
                }
            `}>
                &nbsp;
            </span>
        </Link>
    )
};


 export default function Navbar() {
   return (
     <header className="absolute fixed top-0  w-full h-18 z-50 bg-white text-[10rem] px-2 py-2 items-center "> 
        <div className=" relative w-full h-full md:flex  "> 
            <div className="relative w-full h-full  font-bold  items-center justify-end flex ">
               <nav className="px-4 mx-8  flex items-center justify-between text-crimson">
                <CustomLink href="/" title="RESUME" className="mr-4 text-lg "/>
                <CustomLink href="/portfolio" title="PORTFOLIO" className="mx-4 text-lg"/>
                <CustomLink href="/projects" title="PROJECTS" className="mx-4 text-lg"/>
               </nav> 

            </div>

        </div>


     </header>
   );
 }