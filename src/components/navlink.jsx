"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({link}) => {

    const pathName = usePathname();

    return (
        <Link className={`rounded-xl p-2 hover:bg-purple hover:text-black ${pathName === link.url && "bg-fusha text-black"}`} href={link.url}>
            {link.title}
        </Link>
    )
}

export default Navlink;