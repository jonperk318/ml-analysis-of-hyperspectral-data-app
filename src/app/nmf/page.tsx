"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import nmf from "../../../public/nmf.png";
import frobenius from "../../../public/frobenius-norm.svg";
import img1 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Blind NMF plotting 2-6 components (Grain 1).png";
import img2 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Blind NMF plotting 2-6 components (Grain 2).png";
import img3 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Explained Variance for Blind NMF.png";
import img4 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Iteration Investigation with Grain 1.png";
import img5 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Iteration Investigation with Grain 2.png";
import img6 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Explained Variance for Blind NMF Iteration Investigation.png";
import img7 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Blind NMF with Nimfa Grain 1.png";
import img8 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Blind NMF with Nimfa Grain 2.png";
import img9 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Iteration Investigation with Nimfa Grain 1.png";
import img10 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Iteration Investigation with Nimfa Grain 2.png";
import img11 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Sparse Image-Component NMF Grain 1.png";
import img12 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Sparse Image-Component NMF Grain 2.png";
import img13 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Sparse Spectral-Component NMF Grain 1.png";
import img14 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Sparse Spectral-Component NMF Grain 2.png";
import img15 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Explained Variance for NMF Sparseness Investigation.png";
import img16 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Low Sparseness Iteration Investigation Grain 1.png";
import img17 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/High Sparseness Iteration Investigation Grain 1.png";
import img18 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Low Sparseness Iteration Investigation Grain 2.png";
import img19 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/High Sparseness Iteration Investigation Grain 2.png";
import img20 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Explained Variance for NMF Sparseness and Iteration Investigation.png";


const sections = [
    {
        title: "NMF Theory",
        imgs: [nmf, frobenius],
        descs: ["Humans can interpret some of the features that appear in these hyperspectral datasets, but we need efficient machine learning algorithms for detecting correlations beyond our perception. These large matrices of data will need to be decomposed into their underlying components for us to be able to interpret. We must analyze both the images and spectra in the datasets.",
        "Non-negative matrix factorization (NMF) is an unsupervised machine learning algorithm used to generate a parts-based representation of data. It is similar to Principal Component Analysis (PCA) in its attempt to find a linear representation, but differs in its strict enforcement of non-negative values within both the input and output matrices. The large, hyperdimensional dataset will be decomposed into two sub-matrices of lower rank, with the common dimension being the number of principal components specified in the model. \n\nOne method of characterizing the perovskites is to determine all the spectral signatures present in the material and map them to specific locations in the image. These spectral components should also have minimal overlap with each other, meaning each spectral feature is captured by a different component.",
        "NMF attempts to minimize a beta-divergence loss in its objective function. The most commonly used norm is the Frobenius Norm (shown above). \n\nBlind NMF uses a randomly-generated matrix in its init function (if n_components <= min(n_samples, n_features)), a coordinate descent solver, and no regularization on either decomposition matrix."],
    },
    {
        title: "Scikit-learn",
        imgs: [img1, img2, img3],
        descs: ["The first step in finding an optimal fit of our model to the data is to investigate the affect of the number of components. Blind NMF models were created for grain 1 and grain 2 with components ranging from 2 (the minimum number of possible components) to 6.",
        "Each component within the spectral matrices (left) is color coordinated to its respective image component (right)",
        "The explained variance ratio (EVR) of each model was calculated, demonstrating that three-component models are sufficient to represent the data. This aligns with our expectations from the results, as additional components only seem to fit to the already existing hybrid perovskite peak emission (around 760nm). However, two components for this emission can be expected due to photon recycling.",
        "Further investigation is needed to obtain more accurate fits, as the grain 1 models are having difficulty picking up on the Lead Iodide peak emission (around 520nm)."]
    },
    {
        title: "Iteration Investigation 1",
        imgs: [img4, img5, img6],
        descs: ["The next step is to test the amount of iterations used to find the local minima. This parameter is enforced in the update function of the unsupervised model.",
        "Iteration counts ranging from 10 to 10,000 are tested on three-component models trained on grains 1 and 2. The tolerance is set to 0, forcing the model fit to use the maximum amount of iterations.",
        "The EVR is calculated for each model, showing that 100 iterations appear to be sufficient for model accuracy. The accuracy does increase to a lesser extent after this threshold, and 100 iterations take mere seconds, so higher max-iteration counts within the same order of magnitude can be used."]
    },
    {
        title: "Nimfa",
        imgs: [img7, img8],
        descs: ["In order to test the effectiveness of more NMF methods, the PCA/NMF-focused Python package Nimfa was used from here on.", 
        "First, blind NMF was used to compare with the Scikit-learn models. A higher max-iteration value is necessary to cause an accurate fit with these models. 400 iterations still cause issues with model fit for grain 1 (a more complex dataset than grain 2) with four or more components.",
        "Grain 2, however, finds an optimal fit in fewer iterations than grain 1."]
    },
    {
        title: "Iteration Investigation 2",
        imgs: [img9, img10],
        descs: ["Iteration values ranging from 10 to 10,000 were tested on Nimfa models with 0 tolerance.",
        "10 iterations were not sufficient for either grain, and Nimfa models in general require more iterations to converge to local minima (1,000 iterations compared to 100 in Scikit-learn)"]
    },
    {
        title: "Sparseness Investigation",
        imgs: [img11, img12, img13, img14, img15],
        descs: ["Sparseness is the degree to which a matrix is populated with zeros. Using the Nimfa package, sparseness can be enforced in either the image or spectral decomposition matrix through the update function.",
        "First, different sparseness values from very low (beta value of 1e-8) to very high (3) were tested in ascending order on the image matrices.",
        "High sparseness in the image components removes some of the complexity of the images, showing a simpler mapping of the locations of the three spectral features within the material.",
        "Then, different sparseness values were tested on the spectral matrices.",
        "High sparseness in the spectral components successfully fits the two HP peaks and one Lead Iodide peak in their respective components with minimal overlap. \n\nOnce again, the EVR was calculated for the different models",
        "Higher sparseness in either matrix leads to a lower EVR score due to the loss of data when selecting for zeros over non-zero values."]
    },
    {
        title: "Iterations and Sparseness",
        imgs: [img16, img17, img18, img19, img20],
        descs: ["The final step is to test for the optimal iteration count for low and high degrees of sparseness in the spectral matrices.",
        "First, iteration counts are testes for low and high degrees of sparseness in grain 1.",
        "Second, iteration counts are testes for low and high degrees of sparseness in grain 2.",
        " ",
        "Finally, the EVR is calculated for each model.",
        "Higher iteration counts at best have little effect on the accuracy of sparse decomposition matrices, and at worse it has a negative effect."]
    },
    {
        title: "Citations",
        imgs: [],
        descs: ["Taylor, E. J., Iyer, V., Dhami, B. S., Klein, C., Lawrie, B. J., & Appavoo, K. (2023). Hyperspectral mapping of nanoscale photophysics and degradation processes in hybrid perovskite at the single grain level. Nanoscale Advances, 5(18), 4687–4695. https://doi.org/10.1039/D3NA00529A\n\nLee, D. D., & Seung, H. S. (1999). Learning the parts of objects by non-negative matrix factorization. Nature, 401(6755), 788–791. https://doi.org/10.1038/44565"]
    }
]

const NMFPage = () => {

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

export default NMFPage;