"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import img1 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/semi-supervised-vae/Four Classes of Spectral Features.png";
import img2 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/semi-supervised-vae/SSVAE Grain 1.png";
import img3 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/semi-supervised-vae/Spectral Classes.png";
import img4 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/semi-supervised-vae/SSVAE Grain 1 X-Axis.png";
import img5 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/semi-supervised-vae/SSVAE Grain 1 Y-Axis.png";
import img6 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/semi-supervised-vae/SSVAE Grain 2 on Grain 1 Model.png";



const sections = [
    {
        title: "Data Preparation",
        imgs: [],
        descs: ["Semi-supervised machine learning involves aspects of both supervised and unsupervised machine learning. A small portion of the training data is labeled, and this is used to classify the majority of the data, which is unlabeled. The goal here is to label several spectral features within the data and assess how well the model is able to pick up on the locations of these features through training in order to predict their location in new data."]
    },
    {
        title: "Unavailable",
        imgs: [],
        descs: ["This section will involve research that is not yet published. Come back again in a few months!"]
    }
]


const SSVAEPage = () => {

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

export default SSVAEPage;