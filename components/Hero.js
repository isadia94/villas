import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant } from "next/font/google";



const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600", "700"],
});


const Hero = () => {
  return (
    <div className="w-full h-[50vh] md:h-[110vh] px-4 relative ">
    

      <div className="relative h-full md:h-full w-full md:w-full">
        <Image src="/images/img34.jpg" alt="heroImg" fill />
        <div className="absolute flex flex-col items-center top-[35%] w-full transform -translate-y-1/4">
       <div className="text-white text-center text-[45px] z-10 font-bold">
       <h5 className={`${cormorant.className} uppercase font-bold`}>Experience Serenity:Silent Palms, Diani's Escape!</h5>
          <button className="text-center bg-green-800 px-5 py-3 w-[150px] text-[16px] mt-4 text-white">BOOK NOW</button>
      </div>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
