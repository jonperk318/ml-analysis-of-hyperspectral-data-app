"use client"
import React from "react"
import { useHash } from "react-hash-control";


const Sidebar = ({sections}) => {

    const sectionName = useHash().replaceAll("%20", " ");

    console.log(sectionName)

    return (
            <div className="fixed flex flex-col top-24 h-[100vh] w-[120px] sm:w-[160px] md:w-[180px] lg:w-[220px] xl:w-[250px] bg-black/[0.5]">
                {sections.map((section) => (
                    <a className={`w-full h-[70px] text-left flex items-center p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 hover:bg-purple active:bg-fuchsia rounded-2xl text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ${sectionName === section.title && "bg-fuchsia text-black"}`}
                    href={`#${section.title}`} key={section.title}>{section.title}</a>
                ))}
            </div>
    )
}

export default Sidebar;