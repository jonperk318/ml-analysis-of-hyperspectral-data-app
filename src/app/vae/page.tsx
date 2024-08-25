"use client"
import {motion} from "framer-motion";

const VAEPage = () => {

    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-400vh"}} 
        animate={{y: "0%"}} 
        transition={{duration: 1}}
        >
            <div>
                VAE Page
            </div>
        </motion.div>
    )
}

export default VAEPage;