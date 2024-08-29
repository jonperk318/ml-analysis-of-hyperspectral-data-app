"use client"
import Image from "next/image";
import React from "react";
import { useHash } from "react-hash-control";

const Section = ({sections}) => {

    const sectionName = useHash().replace("%20", " ");

    function getSectionComponents(section) {

        const segments = [];
        let count = 0;
        const maxLength = Math.max(section.imgs.length, section.descs.length);

        for (let i = 0; i < maxLength; i++) {
            segments.push(
            <React.Fragment key={i}>
                {section.descs[i] && (
                    <p className="w-[250px] sm:w-[300px] md:w-[450px] lg:w-[550px] xl:w-[800px] text-xs sm:text-sm md:text-md lg:text-lg my-4 md:my-6 lg:my-8 xl:my-16" key={i + maxLength}>{section.descs[i]}</p>
                )}
                {section.imgs[i] && (
                    <div className="relative item-detail" key={i}>
                        <Image src={section.imgs[i]} alt={section.title} className="rounded-md w-[250px] sm:w-[300px] md:w-[450px] lg:w-[550px] xl:w-[800px]" priority style={{objectFit: "contain", layout: "fill"}} />
                    </div>
                )}
            </React.Fragment>
            )
        }

        return segments;
    }

    return (
            <div className="relative h-full pb-32 left-[120px] md:left-[180px] lg:left-[220px] xl:left-[250px] w-[calc(100vw-120px)] md:w-[calc(100vw-180px)] lg:w-[calc(100vw-220px)] xl:w-[calc(100vw-250px)]">
                {sections.map((section) => (
                    <div className="flex flex-col items-center m-4 md:m-6 lg:m-8 p-4 md:p-6 lg:p-8 bg-space-cadet/[0.4] rounded-xl" key={section.title}>
                        <a className="block relative bottom-32" name={section.title} id={section.title} hidden></a>
                        <a className={`font-bold p-2 md:p-4 lg:p-8 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl rounded-2xl w-[60%] hover:bg-purple/[0.7] active:bg-fuchsia/[0.7] ${sectionName === section.title && "bg-fuchsia/[0.7] text-black"}`} href={`#${section.title}`}>
                            {section.title}
                        </a>
                        {getSectionComponents(section)}
                    </div>
                ))}
            </div>
    )
}

export default Section;