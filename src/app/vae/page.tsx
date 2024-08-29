"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

const sections = [
    {
        title: "VAE Theory",
        imgs: [],
        descs: []
    }
]

const VAEPage = () => {

    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-900vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            <div className="">
                <Sidebar sections={sections} />
                <Section sections={sections} />
            </div>
        </motion.div>
    )
}

export default VAEPage;