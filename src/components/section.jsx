"use client"
import Image from "next/image";
import React from "react";

const Section = ({sections}) => {

    function getSectionComponents(section) {

        const segments = [];
        let count = 0;
        const maxLength = Math.max(section.imgs.length, section.descs.length);

        for (let i = 0; i < maxLength; i++) {
            segments.push(
            <React.Fragment key={i}>
                {section.imgs[i] && (
                    <div className="relative item-detail w-[250px] h-32 sm:w-[300px] md:w-[450px] md:h-48 lg:w-[550px] xl:w-[800px] xl:h-[500px]" key={i}>
                        <Image src={section.imgs[i]} alt={section.title} className="rounded-xl h-auto" fill priority sizes="100%" style={{objectFit: "contain", layout: "fill"}} />
                    </div>
                )}
                {section.descs[i] && (
                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]" key={i + maxLength}>{section.descs[i]}</p>
                )}
            </React.Fragment>
            )
        }

        return segments;
    }

    return (
            <div className="sticky h-full left-[120px] md:left-[180px] lg:left-[220px] xl:left-[250px] w-[calc(100vw-120px)] md:w-[calc(100vw-180px)] lg:w-[calc(100vw-220px)] xl:w-[calc(100vw-250px)]">
                {sections.map((section) => (
                    <div className="flex flex-col items-center mb-2 md:mb-4 lg:mb-8 p-2 md:p-4 lg:p-8 bg-space-cadet/[0.4] rounded-xl mx-2 md:mx-4 lg:mx-8" key={section.title}>
                        <h1 className="font-bold p-2 md:p-4 lg:p-8 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-space-cadet/[0.4] rounded-xl size-fit hover:bg-purple focus:bg-fusha" id={section.title}>
                            <a name={section.title} href={`#${section.title}`}>
                                {section.title}
                            </a>
                        </h1>
                        {getSectionComponents(section)}
                    </div>
                ))}
            </div>
    )
}

export default Section;