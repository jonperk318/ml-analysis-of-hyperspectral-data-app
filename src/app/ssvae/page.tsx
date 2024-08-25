"use client"
import {motion} from "framer-motion";

const SSVAEPage = () => {

    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-400vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            <div>
                SSVAE Page
            </div>
        </motion.div>
    )
}

export default SSVAEPage;