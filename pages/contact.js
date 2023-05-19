import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import ClientLayout from "@/components/ClientLayout";

import { Cormorant } from "next/font/google";


const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600", "700"],
});

const melodrama = localFont({
  src: "../public/fonts/melodrama/Melodrama-Semibold.ttf",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

const Contact = () => {
  return (
    <ClientLayout>
      <div className="h-full md:h-full w-full mb-32 px-4">
      <div  className={`${cormorant.className} text-[90px] font-bold text-green-800`}>
      <h1>GET </h1>
          <h1 className="-mt-12">IN TOUCH</h1>
     
        </div>
        <form action="" className="w-[500px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5  }}
            className={`${melodrama.className} md:text-[50px] text-center mb-6 underline `}
          >
            Contact Us
          </motion.h1>
          <motion.p
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{ duration: 0.5,delay:0.2 }}
          className="text-center my-4">
            Our Lovely team would love to hear from you
          </motion.p>
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{ duration: 0.5,delay:0.5 }}>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col my-1">
              <label>First Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-300  outline-none px-4 py-2"
              />
            </div>
            <div className="flex flex-col my-1">
              <label>Last Name</label>
              <input
                type="text"
                placeholder=""
                className="border border-gray-300 outline-none px-4 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col my-1">
            <label>Email</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>First Name</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300  outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col my-1">
            <label>Message</label>
            <textarea
              type="text"
              placeholder=""
              className="border border-gray-300  outline-none px-4 py-2"
            />
          </div>
          <input
            type="button"
            value="Send Message"
            className="bg-green-800 outline-none w-full mt-4 py-3 text-white"
          />
          </motion.div>
          
        </form>
      </div>
    </ClientLayout>
     
      
 
   
  );
};

export default Contact;
