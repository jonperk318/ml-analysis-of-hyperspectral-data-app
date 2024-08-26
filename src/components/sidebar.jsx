"use client"

const Sidebar = ({sections}) => {

    return (
            <div className="fixed flex flex-col h-[100vh] w-[120px] md:w-[180px] lg:w-[220px] xl:w-[250px] bg-space-cadet/[0.3]">
                {sections.map((section) => (
                    <a className="w-full h-[70px] text-left justify-center hover:bg-lilac focus:bg-purple"
                    href={`#${section.name}`} key={section.name}>{section.name}</a>
                ))}
            </div>
    )
}

export default Sidebar;