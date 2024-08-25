"use client"
import {motion} from "framer-motion";

const ArtificialPage = () => {

    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-400vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            <div>
                Artificial Page
            </div>
        </motion.div>
    )
}

export default ArtificialPage;