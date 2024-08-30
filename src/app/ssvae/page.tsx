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
        imgs: [img1],
        descs: ["Semi-supervised machine learning involves aspects of both supervised and unsupervised machine learning. A small portion of the training data is labeled, and this is used to classify the majority of the data, which is unlabeled. The goal here is to label several spectral features within the data and assess how well the model is able to pick up on the locations of these features through training in order to predict their location in new data.\n\nThe first step is to manually determine 6 examples of each of the 4 features present in the material, giving a labeled set of 24 spectra.",
        "Next, the 24 spectra were divided into the following arrays: \n\nX_sup: 16 labeled spectra for supervised training\ny_sup: one-hot labels for the spectra (tensor of same size as X_sup)\nX_val: 8 labeled spectra for validation step\ny_val: labels for validation step\nX_unsup: the rest of the spectra, with the labeled spectra replaced with empty arrays\n\nThe total percentage of labeled data is 0.199%\n\n"]
    },
    {
        title: "Results",
        imgs: [img2, img3, img4, img5, img6],
        descs: ["Next, the model is trained and validated for 50 epochs. The mean, standard deviation, and label vectors are taken from encoding the hyperspectral dataset after the model has been trained.\n\nThe first image in the figure below is a plot of the latent space color mapped according to the four spectral feature classes defined above. The second image is the hybrid perovskite cell showing the spatial locations of the four classes. The substrate at the grain boundaries (in yellow) is clearly uncorrelated to the other spectral features in the data.",
        "Below is one spectrum taken from each class labeled by the SSVAE model.",
        "The spectra are then color mapped according to their positions on the x and y axes.",
        " ",
        "Finally, the model trained on grain 1 is used to encode the dataset from grain 2."]
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