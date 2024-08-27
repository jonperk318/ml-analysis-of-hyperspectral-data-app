"use client"

const Sidebar = ({sections}) => {

    return (
            <div className="fixed flex flex-col top-24 h-[100vh] w-[120px] md:w-[180px] lg:w-[220px] xl:w-[250px] bg-black/[0.5]">
                {sections.map((section) => (
                    <a className="w-full h-[70px] text-left flex items-center p-2 hover:bg-purple active:bg-fusha text-sm sm:text-md md:text-lg lg:text-xl"
                    href={`#${section.title}`} key={section.title}>{section.title}</a>
                ))}
            </div>
    )
}

export default Sidebar;