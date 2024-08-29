"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import img0 from "../../../public/hybrid-perovskite.svg"
import img1 from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Grain 1 Images.svg";
import img2 from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Grain 2 Images.svg";
import img3 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/2) Grain 2 Cosmic Ray Points (before removal 1).gif";
import img4 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/4) Grain 2 Cosmic Ray Points (after removal 1).gif";
import img5 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/6) Grain 2 Cosmic Ray Points (before removal 2).gif";
import img6 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/preprocessing/cosmic-rays/8) Grain 2 Cosmic Ray Points (after removal 2).gif";
import percentage_changed from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/cosmic-rays/Percentage of total data changed after removal.svg";
import img7 from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Denoising Grain 1 with Various Techniques.svg";
import img8 from "../../../machine-learning-analysis-of-hyperspectral-data/svg-figures/preprocessing/Denoising Grain 2 with Various Techniques.svg";
import img9 from "../../../public/denoising.svg"

const sections = [
    {
        title: "Background",
        imgs: [img0],
        descs: ["Hybrid perovskites (HPs) have attained unprecedented growth in recent years for their potential applications in optoelectronic technologies, including solar cells, light-emitting diodes, neuromorphic computing, and lasers. Methylammonium lead iodide (MAIPb), or hybrid inorganic-organic perovskite, the chemical structure of which is shown in figure a, has become one of the most efficient thin-film photovoltaic materials to date, attaining up to 25.7% efficiency. However, further characterization of their long-term phase stability at the nano scale is needed to understand the effects of grain boundaries and to weigh their possible benefits and shortcomings.", 
        "In this research, scanning electron microscopy (SEM) was initially used to map the surface of the materials. Hyperspectral datasets of HP were acquired via cathodoluminescence (CL) spectroscopy. Both SEM and CL are powerful tool for mapping materials below the diffraction limit. In CL, an electron beam excites the HP which then emits photons that are focused by a parabolic mirror into a CCD."],
    },
    {
        title: "Data",
        imgs: [img1, img2],
        descs: ["This research mainly utilizes two hyperspectral datasets of HP acquired via CL. On the left of these two figures are SEM images, the center of the figures show the CL images, and the right show four spectra taken from each CL image, the four spectra are plotted in the center image, and the wavelength used in the center image is shown using a black vertical line on the right figure.", 
        "Grain 1 is a wide-field view of a hybrid perovskite cell, and grain 2 is a high-fidelity image of a cell boundary."]
    },
    {
        title: "Cosmic Rays",
        imgs: [img3, img4, img5, img6, percentage_changed],
        descs: ["Cosmic rays periodically saturate the detector and create spectra that do not correspond to anything physical in the material. Thus, it is necessary to remove the cosmic rays before proceeding with any analysis to ensure the highest quality data possible. Two removal techniques were used to get rid of 100% of the cosmic rays", 
        "The first removal technique iterates through each wavelength in each pixel in the CL image. It determines if the spectral intensity at that wavelength has increased by a specified multiple (7) of that wavelength in the previously checked pixel (in the image dimension).",
        "Then, these points are plotted to verify they are indeed cosmic rays. These affected points are replaced with the mean of the surrounding points (for each wavelength in a maximum radius of 4 from the affected wavelength) and replotted to show the resulting spectra.",
        "The second removal technique iteratively determines if the current point has a spectral intensity greater than a specified multiple (2) of the previous wavelength in the spectrum (in the spectral dimension). Similar to the process above, these points are plotted, the cosmic rays are removed, and they are plotted again.",
        "To determine the optimal order of cosmic ray removal techniques to use on the data, these steps were also attempted in reverse. The results show the same total percentage of cosmic rays removed for each test, and the most successful technique (the second technique) altered approximately 0.0246% of the total data"]
    },
    {
        title: "Denoising",
        imgs: [img7, img8, img9],
        descs: ["To ensure the data was of the highest quality possible, more than 20 different denoising techniques were used to determine what would best remove background noise which did not correspond to anything physical in the material. This would also ideally preserve each unique spectral signature with their relative peak heights.",
        "Four points in the images were chosen which represented a diverse assortment of spectral features. These were plotted to demonstrate the effect of the denoising techniques on different features.",
        "The filter types used included Median, Savitzky-Golay, Gaussian, and Wavelet filters with various combinations thereof. Subtracting the mean of the first 100 spectral points of the array from the entire array (the background noise), setting all negative values to zero, and running the array through a size 3 Median filter successfully removed nonphysical noise from the data while retaining the peak heights."]
    }
]

const PreprocessingPage = () => {

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

export default PreprocessingPage;