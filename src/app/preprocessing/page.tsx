"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";

const sections = [
    {
        name: "Data",
        img: ["machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Grain 1 Images.svg", "machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Grain 2 Images.svg"],
        desc: ["test1", "test2"]
    },
    {
        name: "Cosmic Rays",
        img: ["machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/2) Grain 2 Cosmic Ray Points (before removal 1).gif", "machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/4) Grain 2 Cosmic Ray Points (after removal 1).gif"],
        desc: ["Test3", "test4"]
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
                <div className="absolute h-[800vh] left-[120px] md:left-[180px] lg:left-[220px] xl:left-[250px] w-[calc(100vw-120px)] md:w-[calc(100vw-180px)] lg:w-[calc(100vw-220px)] xl:w-[calc(100vw-250px)]">
                    Page
                </div>
            </div>
        </motion.div>
    )
}

export default PreprocessingPage;