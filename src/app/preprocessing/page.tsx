"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import img1 from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Grain 1 Images.svg";
import img2 from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Grain 2 Images.svg";
import img3 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/2) Grain 2 Cosmic Ray Points (before removal 1).gif";
import img4 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/4) Grain 2 Cosmic Ray Points (after removal 1).gif";

const sections = [
    {
        title: "Data",
        imgs: [img1, img2],
        descs: ["test1", "test2"]
    },
    {
        title: "Cosmic Rays",
        imgs: [img3, img4],
        descs: ["Test3", "test4"]
    }
]

const PreprocessingPage = () => {

    return (
        <motion.div 
        className="h-full" 
        initial={{y: "-400vh"}} 
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

export default PreprocessingPage;