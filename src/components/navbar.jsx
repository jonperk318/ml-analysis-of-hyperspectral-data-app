"use client"
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Navlink from "./navlink";
import {motion} from "framer-motion";

const links = [
    {url: "/", title: "Home"},
    {url: "/preprocessing", title: "Preprocessing"},
    {url: "/nmf", title: "NMF"},
    {url: "/vae", title: "VAE"},
    {url: "/ssvae", title: "SSVAE"},
    {url: "/artificial", title: "Artificial Data"},
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        open: {
            rotate: 45,
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        open: {
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        open: {
            rotate: -45,
        }
    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        open: {
            x: 0,
            transition: {
                //when: "beforeChildren",
                staggerChildren: 0.15,
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        open: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 text-xl bg-black/[0.5]">
            {/* LOGO */}
            <div className="z-40 justify-center">
                <Link href="https://www.jayandsparrow.com/">
                    <img src="/logo.png" className="w-16 hover:scale-125" alt="logo" />
                </Link>
            </div>
            {/* LINKS */}
            <div className="hidden md:flex gap-8">
                {links.map((link) => (
                    <Navlink link={link} key={link.title} />
                ))}
            </div>
            {/* ICONS */}
            <div className="hidden md:flex gap-4">
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-watermelon", size:24}}>
                    <a href="https://github.com/jonperk318">
                        <FaGithub />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-yellow", size:24}}>
                    <a href="https://www.instagram.com/jonperk318/">
                        <FaInstagram />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-light-blue", size:24}}>
                    <a href="https://www.linkedin.com/in/jonathan-perkins-0b1411285/">
                        <FaLinkedin />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-blue", size:24}}>
                    <a href="https://www.facebook.com/jonathan.davidperkins">
                        <FaFacebook />
                    </a>
                </IconContext.Provider>
                <IconContext.Provider value={{className: "hover:scale-125 hover:fill-purple", size:24}}>
                    <a href="mailto:jonperk318@gmail.com">
                        <IoMdMail />
                    </a>
                </IconContext.Provider>
            </div>
            {/* MENU */}
            <div className="md:hidden">
                {/* HAMBURGER */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={()=>setOpen(!open)}>
                    <motion.div variants={topVariants} animate={open ? "open" : "closed"} className="w-10 h-1 bg-fuchsia rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "open" : "closed"} className="w-10 h-1 bg-fuchsia rounded"></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "open" : "closed"} className="w-10 h-1 bg-fuchsia rounded origin-left"></motion.div>
                </button>
                {/* MENU LINKS */}
                {open && (
                    <motion.div 
                        variants={listVariants} 
                        initial="closed" 
                        animate="open" 
                        className="absolute z-40 top-0 left-0 w-screen h-screen animated-background bg-black bg-gradient-to-r from-black from-10% via-light-blue/[0.3] to-black flex flex-col items-center justify-center gap-10 text-4xl">
                        {links.map(link => (
                            <motion.div variants={listItemVariants} className="" key={link.title}>
                                <Link href={link.url} key={link.title} className={"rounded-xl p-1 hover:bg-fuchsia hover:text-black"} onClick={()=>setOpen(!open)}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar;