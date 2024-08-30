"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import blazers from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/uab-blazers.png";
import img1 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Artificial HSI with no Noise.png";
import img2 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Artificial HSI with Noise.png";
import calibrator from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/rgb-calibrator.png";
import img3 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Calibrator HSI.png";
import img4 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Denoised Artificial HSI Calibrator.png";
import img5 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Denoised Artificial HSI.png";
import img6 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Blind NMF on Noiseless Artificial Data 2-6 Components Nimfa.png";
import img7 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Blind NMF on Noisy Artificial Data 2-6 Components Nimfa.png";
import img8 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Blind NMF on Calibrator 2-6 Components Nimfa.png";
import img9 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Blind NMF on Noiseless Artificial Data 2-6 Components.png";
import img10 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Blind NMF on Noisy Artificial Data 2-6 Components.png";
import img11 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Blind NMF on Calibrator 2-6 Components.png";
import img12 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Explained Variance of Blind NMF on Artificial Data.png";
import img13 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Sparse NMF with Noiseless Artificial Data.png";
import img14 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Sparse NMF with Noisy Artificial Data.png";
import img15 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Sparse NMF with Calibrator.png";
import img16 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Explained Variance of Sparse NMF on Artificial Data.png";
import img17 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Vanilla VAE on Calibrator.png";
import img18 from "../../../public/vanilla-vae-noiseless.png";
import img19 from "../../../public/vanilla-vae-noisy.png";
import img20 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Vanilla VAE on Noisy Artificial Data X-axis Spectra.png";
import img21 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Vanilla VAE on Noisy Artificial Data Y-axis Spectra.png";
import img22 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Four Classes of Spectral Features.png";
import img23 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/SSVAE on Artificial Data.png";
import img24 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/SSVAE on Artificial Data X-Axis Spectra.png";
import img25 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/SSVAE on Artificial Data Y-Axis Spectra.png";
import img26 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/artificial-data/Classes from SSVAE on Artificial Data.png";


const sections = [
    {
        title: "Generating Artificial Data",
        imgs: [blazers, img1, img2, calibrator, img3],
        descs: ["The final step of this research is to generate artificial hyperspectral data and compare the results of NMF and VAE on it to the results of them on the HP data.\n\nTo generate a hyperspectral image, an HSI class is created. This class takes an image and multiplies its RGB channels by Gaussian, Lorentzian, and Voigt distributions respectively. This creates artificial spectra for each pixel in the image, and each color has its own unique spectrum.\n\nThis artificial data was created using the UAB Blazers logo.",
        "Below are the results of the hyperspectral image created from the Blazers logo. First is an HSI with no artificial noise. The wavelength in the image on the left is displayed on the plot, and the locations of the spectra in the plot on the right are shown in color-coordinated marks in the image on the left.",
        "Below are the results of the HSI created with artificial noise to better represent real-world data.",
        "Similarly, an RGB calibrator image is used to create an HSI.",
        " "]
    },
    {
        title: "Preprocessing",
        imgs: [img4, img5],
        descs: ["Next, both the calibrator and Blazer logo are denoised using the same methods as the HP data: subtracting background noise followed by a median filter.",
        " "]
    },
    {
        title: "NMF",
        imgs: [img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16],
        descs: ["Blind NMF in Nimfa with 2-6 components was run on the noiseless data, noisy data, and calibrator.",
        " ",
        " ",
        "These results show Nimfa still has difficulty converging, even at 400 iterations. So, following this, Scikit learn was used.",
        " ",
        " ",
        "The explained variance shows that 3 components are sufficient to almost perfectly account for all of the variation in the data.",
        "Next, sparseness was enforced in the spectral vectors of models taken from the noiseless data, noisy data, and calibrator.",
        " ",
        " ",
        "The EVR shows that high sparseness (past a beta value of 1.0) has a detrimental effect on the accuracy of the model, particularly for noisy data."]
    },
    {
        title: "Unsupervised VAE",
        imgs: [img17, img18, img19, img20, img21],
        descs: ["Unsupervised VAE models were run on the calibrator, noiseless data, and noisy data similarly to the HP data.",
        " ",
        " ",
        "The spectra were then color mapped according to their locations on each axis.",
        " "]
    },
    {
        title: "SSVAE",
        imgs: [img22, img23, img24, img25, img26],
        descs: ["Finally, a semi-supervised model for the noisy artificial data created from the Blazers logo was trained.\n\n6 example spectra were manually chosen and put into 4 classes, totalling in 24 labeled spectra.",
        "The percentage of labeled data is 0.106%.\n\nThe model was then trained for 50 epochs, and the label vector was taken from encoding the noisy data onto the latent space.",
        "The spectra are plotted below.",
        " ",
        "One spectrum from each class is represented below."]
    }
]


const ArtificialPage = () => {

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

export default ArtificialPage;