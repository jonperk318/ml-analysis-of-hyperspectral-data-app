import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Machine Learning Analysis of Hyperspectral Data",
  description: "Using Non-negative Matrix Factorization (NMF) and Variational Autoencoder (VAE) machine learning architectures to analyze spatial and spectral features of hyperspectral cathodoluminescence (CL) spectroscopy images taken from hybrid inorganic-organic perovskite material",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
