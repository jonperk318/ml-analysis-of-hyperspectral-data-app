"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import ae from "../../../public/ae.png";
import vae1 from "../../../public/vae.png";
import vae2 from "../../../public/vae-graphic.svg"


const sections = [
    {
        title: "VAE Theory",
        imgs: [ae, vae1, vae2],
        descs: ["NMF is limited to linear representations of data, but neural networks are able to detect non-linear/unbalanced relationships. The remainder of this research will attempt to use unsupervised and semi-supervised deep neural networks to detect non-linear patterns within the data.", 
        "An autoencoder is an unsupervised neural network model that learns two functions: an encoding function (transforms input into latent space representation with lower dimensionality) and a decoding function (recreates input data from latent representation). The autoencoder attempts to optimize the representation of non-linear data. It is more deterministic in its approach than a variational autoencoder.",
        "A variational autoencoder (VAE) is a generative autoencoder with the addition of regularized training (which prevents overfitting). This crucial additional step causes each point in the latent space to yield meaningful data, allowing for generative processes. These are more probabilistic in nature and enforce a distribution (often Gaussian) in the sampling process. The end result is a latent space that is optimized for clustering together similar data points while giving a continuous distribution across the entire latent space. This is achieved through minimizing the KL divergence (causing the mean to approach 0 and the standard deviation to approach 1).",
        "Loss function: reconstruction term (Gradient descent) (makes encoding and decoding efficient) + regularization term (Kullback-Leibler Divergence) (creates regular latent space). \n\nVAEs use a 'reparameterization trick' to allow for backpropagation, which is impossible through a stochastic node. The process of sampling from a distribution that is parameterized by the model is not differentiable, and this is a problem for gradient-based approaches. There must be a method of making the predictions separate from the stochastic sampling element. \n\nIt accomplishes this by treating random sampling as a noise term which is now independent and not parameterized by the model. A Gaussian can be scaled by a sample from the noise distribution multiplied by the standard deviation added to the mean. This allows for further differentiation through the model. \n\nThe latent space representation of the data is of primary interest as this reveals the correlations in the data that the model detects. However many latent dimensions specified in the training will be the number of principal components in the model."]
    },
    {
        title: "Unavailable",
        imgs: [],
        descs: ["This section will involve research that is not yet published. Come back again in a few months!"]
    }
]

const VAEPage = () => {

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

export default VAEPage;