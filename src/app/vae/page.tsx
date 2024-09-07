"use client"
import {motion} from "framer-motion";
import Sidebar from "../../components/sidebar.jsx";
import Section from "../../components/section.jsx";

import ae from "../../../public/ae.png";
import vae1 from "../../../public/vae.png";
import vae2 from "../../../public/vae-graphic.svg"
import img1 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1.png";
import img2 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Standard Deviation Plot.png";
import img3 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Bernoulli Sampling Plot.png";
import img4 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Spectra from X-axis of Latent Space.png";
import img5 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Spectra from Y-axis of Latent Space.png";
import img6 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 2.png";
import img7 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 2 Spectra from X-axis of Latent Space.png";
import img8 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 2 Spectra from Y-axis of Latent Space.png";
import img9 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Increased KL Scaling.png";
import img10 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Decreased KL Scaling.png";
import img11 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: KL Scaling with Larger Steps.png";
import img12 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: KL Not Scaled.png";
import img13 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Batch Size 128.png";
import img14 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Batch Size 256.png";
import img15 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Batch Size 256 STDEV.png";
import img16 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Batch Size 512.png";
import img17 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: 100 Epochs.png";
import img18 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Bernoulli Sampling.png";
import img19 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Continuous Bernoulli Sampling.png";
import img20 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 Test: Changed Training Dimensions.png";
import img21 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 2 using Grain 1 Model.png";
import img22 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 2 using Grain 1 Model Batch Size 256.png";
import img23 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Vanilla VAE Grain 1 using Grain 2 Model.png";
import img24 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/VAE in 3 Dimensions Grain 1.png";
import img25 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/VAE in 3 Dimensions Grain 2.png";
import img26 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/VAE in 3 Dimensions Grain 1 Batch Size 256.png";
import img27 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/VAE in 3 Dimensions Batch Size 256 X-Axis Spectra.png";
import img28 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/VAE in 3 Dimensions Batch Size 256 Y-Axis Spectra.png";
import img29 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/VAE in 3 Dimensions Batch Size 256 Z-Axis Spectra.png";
import img30 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Joint Invariant VAE with 2 Discrete Dimensions Grain 1.png";
import img31 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Joint Invariant VAE with 10 Discrete Dimensions Grain 1.png";
import img32 from "../../../machine-learning-analysis-of-hyperspectral-data/png-figures/unsupervised-vae/Joint Invariant VAE with 10 Discrete Dimensions Grain 2.png";


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
        title: "Invariant VAE",
        imgs: [img1, img4, img5, img2, img3, img6, img7, img8],
        descs: ["An invariant variational autoencoder enforces rotational, translational, and scale invariances. The goal is to remove any effect these transformations will cause in the encoding process and to pick up on the similarities in the features. The following are the steps taken to train these models: \n\n1. Transpose denoised array, reshape to 1D, normalize entire dataset, and reshape to 2D\n\n2. Convert from Numpy array to PyTorch tensor, then find number of samples (spectra) and signal (number of points in image along x and y axes containing spectra)\n\n3. Create a dataloader object with unsqueezed training data. This is the entire hyperspectral array reshaped into 2 dimensions with another dimension of size one inserted into the array\n\n4. An invariant VAE model with 2 latent dimensions is created along with an SVI trainer. Then, 50 epochs are run with every 10 epochs printing the training loss, showing the convergence to local minima\n\n5. Putting the CL data into the encoder now returns the mean and standard deviation of the Z (latent) space, giving an array of image points (20008 for grain 1), each containing an entire spectrum, plotted on an axis of specified latent dimensions (in this case, 2)\n\nBelow are the mean vectors taken from the latent space plotted according to their normalized values within the space.",
        "Determining what each latent dimension corresponds to in the material is a nontrivial process. Below are the spectra contained within the pixels color mapped according to their normalized values in each dimension (x and y axes) in order to determine more about the latent dimensions.",
        "The y-axis has a smaller HP peak emission for higher values, suggesting the y-axis directly corresponds to the height of the HP peak, whereas the x-axis has variation in the HP peak height (for example, the higher values represented as yellow spectra have both low and high peaks), suggesting the y-axis corresponds to the relative amplitude of the HP and Lead Iodide peaks to one another.",
        "The standard deviation vectors can also be used to decode each pixel in the original dataset and plot them on a two-dimensional axis. This shows a sharper distinction between the material at the grain boundaries and the HP grains. The standard deviation vector nearly collapses the axes into a linear relationship.",
        "Bernoulli (discrete) sampling as opposed to Gaussian (weighted, continuous) sampling appears to treat spatial regions differently from one another resulting in a compression of the data in the higher y values. Here it provides a similar representation of the data as Gaussian sampling. However, the grain boundary pixels are less bunched together at the top of the latent space.",
        "The same process was also used to train an invariant VAE model on the grain 2 hyperspectral data.\n\nThe grain boundary CL image shows a more distinct bunch of the boundary pixels together at the top of the latent space than the wide-field image. However, these are more spread across the x-axis.",
        "Similarly, the spectra are color mapped according to their positions in the x and y axes.",
        " "]
    },
    {
        title: "Testing Different Parameters",
        imgs: [img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23],
        descs: ["The next step is to try varying different parameters of the VAE models to become familiar with their relationships to the results.\n\nThe first test involves increasing the KL-Divergence scaling by an order of magnitude. The weight of the KL-Divergence in the loss function was originally a linear sequence of scalar values from 0.001 to 0.01 in 50 epochs. Now, the scaling is 0.01 to 0.1.\n\nIncreasing the KL-Divergence scaling gives greater weight to the KL-Divergence in the loss function with each epoch. This causes the grain boundary pixels to bunch together at the top of the latent space, but the pixels funnel outwards as the y value decreases. There is a large variation in the pixels with the higher x values located near (but not in) grain boundaries. These regions contain large amounts of Lead Iodide.",
        "Decreasing the KL scaling to 0.0001 to 0.001 causes the pixels near the grain boundaries to become more correlated to one another at the higher y-values in the latent space, and to spread out for lower y-values as with the original model.",
        "Scaling the KL-Divergence with larger steps produces nearly identical results to increasing the scaling by an order of magnitude.",
        "Keeping the scaling of the KL-Divergence constant means the KL-Divergence has the same weight on the loss function in the first epoch as the last one. This causes the pixels to flatten out into a linear relationship and the grain boundary pixels to bunch together at the lowest x and y values.",
        "Increasing the batch size from 64 samples to 128 samples had little effect except to transpose the axes of the latent space.",
        "Further increasing the batch size to 256 elongates the bunched up region of grain boundary pixels for high y-values as with decreased KL scaling.",
        "The standard deviation vector produces fascinating results. Pixels bunch together for low y values while having a higher variation for high x and y values. This method also clearly picks up on differences in the lower right portion of the image more than the rest of the image. The other models did not show such strong preference to this region.",
        "A batch size of 512 continues to flatten out the relationship between the x and y variables.",
        "The next test involves increasing the epochs from 50 to 100 during the model training. This produces a more tightly-bound grain boundary region, but not much else that is noteworthy.",
        "The sampling method previously used in training the VAE has been Gaussian sampling. This means that the mean and standard deviation vectors are used to sample a gaussian distribution from the latent space. This Gaussian sampling is a continuous distribution, whereas a finite sampling could in theory better represent the real-world data.\n\nBernoulli sampling forces each element to undergo an independent Bernoulli trial in which there are two possible outcomes: success and failure. Each element has equal probability of being selected.\n\nIn this data, Bernoulli sampling has the effect of giving more nuance to the grain boundary regions in the latent space (meaning there is less bunching). The model finds some slightly stronger relationship between this region and the rest of the data. This is likely due to the equal probability of each pixel having an effect on the final outcome.",
        "A continuous Bernoulli distribution is often specifically used in the context of VAEs. Rather than a single distribution, this creates a family of distributions parameterized by a shape parameter (affects the shape of the distribution and does not merely stretch or shrink it).\n\nThis causes the regions of the image to be almost entirely segregated, with HP signatures on the low end of the x-axis and grain boundary signatures on the high end. A narrow region connects these two segments, and these lie in regions near but not at the boundaries.",
        " ",
        " ",
        " ",
        " "]
    },
    {
        title: "3D Invariant VAE",
        imgs: [img24, img25, img26, img27, img28, img29],
        descs: ["Next, similar models were trained, but with a 3-dimensional latent space. The added axis gives the ability to represent more complex relationships in the data.",
        " ",
        " ",
        "The spectra are then color mapped according to their position along the x, y, and z axes.",
        " ",
        " "]
    },
    {
        title: "Joint Invariant VAE",
        imgs: [img30, img31, img32],
        descs: ["A joint invariant variational autoencoder learns both discrete and continuous latent representations of data while enforcing rotational, translational, and scale invariances.",
        " ",
        " "]
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