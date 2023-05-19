import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import {FaQuoteLeft} from 'react-icons/fa'
import Heading from "./Heading";
const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});



const Testimonials = () => {
  return <div className="w-full h-full mb-20 relative px-4">
    <div className="relative w-full text-center py-10 md:py-20">
      <Heading title="TESTIMONIALS"/>
     
      
      </div>
    <div className="mb-20 flex items-center flex-col md:flex-row gap-12 bg-green-100 p-4 md:w-[70%] md:mx-auto">
        <div className="md:h-[400px] h-[100px]  w-[100px] md:w-[400px] relative rounded-full md:rounded-none">
          <Image src="/images/girl.jpg" alt="img" fill className="rounded-full md:rounded-none"/>
        </div>
        <div className=" w-full flex flex-col items-center justify-between -mt-12 md:-mt-0">
        <p className={`${melodrama.className}flex justify-between w-full text-yellow-400 md:px-4 md:text-2xl`}>
            <FaQuoteLeft/>
        </p>
        <p className="md:text-[29px] md:max-w-[600px] md:px-12 ">We had a wonderful stay everything was superb 👌 Many thanks to Mr mwarabu and miss faith who made sure we were comfortable and we had Activities to do during our stay. We will definitely come back..</p>
        <div className="w-full flex justify-between">
            <p className="font-bold md:px-12 mt-2 text-green-800">Grace</p>
        </div>
        </div>
       
    </div>
  </div>;
};

export default Testimonials;
