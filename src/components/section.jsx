"use client"
import Image from "next/image"

const Section = ({sections}) => {

    return (
            <div className="sticky h-full left-[120px] md:left-[180px] lg:left-[220px] xl:left-[250px] w-[calc(100vw-120px)] md:w-[calc(100vw-180px)] lg:w-[calc(100vw-220px)] xl:w-[calc(100vw-250px)]">
                {sections.map((section) => (
                    <div id={section.title}>
                        <h1 className="font-bold py-2 md:py-4 lg:py-8 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">{section.title}</h1>
                        <div className="flex flex-row p-2 md:p-4 lg:p-8 bg-space-cadet/[0.4] rounded-2xl mx-2 md:mx-4 lg:mx-8"  key={section.title}>
                            <div className="flex flex-col">
                                {section.imgs.map((img, index) => (
                                    <div className="relative item-detail w-32 h-28 md:w-96 md:h-48 xl:w-[500px] xl:h-[500px]" key={index}>
                                        <Image src={img} alt={section.title} className="rounded-xl h-auto" fill="true" priority sizes="100%" layout={'fill'} objectFit={'contain'} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col text-center items-center">
                            {section.descs.map((desc) => (
                                <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]" key={desc}>{desc}</p>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Section;