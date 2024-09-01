"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bnmf2_6g2 from "../../machine-learning-analysis-of-hyperspectral-data/png-figures/nmf/Blind NMF plotting 2-6 components (Grain 2).png";

export default function Home() {

  const pathName = usePathname();

  return (
    <main>
      <motion.div 
          className="h-full" 
          initial={{y: "-200vh"}} 
          animate={{y: "0%"}} 
          transition={{duration: 1}}
          >
        <div key={pathName} className="w-screen h-[130vh] md:h-[130vh] lg:h-full text-silver animated-background bg-black bg-gradient-to-r from-black from-30% via-purple/[0.3] to-black">
          <div>
            <div className=" h-full flex flex-col lg:flex-row px-2 md:px-10 lg:px-12 xl:px-14 text-xl items-center justify-center content-center pt-10">
              {/* TEXT */}
              <div className="h-full w-1/2 flex flex-col gap-8">
                <h1 className="text-4xl font-bold md:text-6xl">Machine Learning Analysis of Hyperspectral Data</h1>
                <p className="md:text-xl">
                  by Jonathan Perkins</p>
                  <Link href={"https://github.com/jonperk318/machine-learning-analysis-of-hyperspectral-data"} className="p-4 text-sm md:text-md lg:text-lg font-semibold ring-fuchsia ring-2 rounded-xl w-fit hover:bg-fuchsia hover:text-black">View project on GitHub</Link>
              </div>
              {/* IMAGE */}
              <div className="relative h-1/2 w-1/2 m-10 pt-8">
                <div className="absolute -inset-2 pt-8">
                  <div className="w-100% h-full mx-0 opacity-40 blur-lg bg-purple">
                  </div>
                </div>
                <Image src={bnmf2_6g2} className="relative object-contain rounded-xl" alt="blind-nmf-graphic" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
