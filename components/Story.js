import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Story = () => {
  return (
    <div className="h-full relative w-full">
      <div className="w-full flex flex-col md:flex-row items-center mt-0 bg-green-50 ">
        

        <div className="w-full md:w-1/2 h-full md:flex justify-center items-center">
          <div className="py-12 px-4 md:px-16 text-center md:text-left">
            <div className="relative w-full md:w-fit">
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.9 }}
                className="text-center"
              >
                <Heading title="Our Story" smallHeader />
              </motion.h2>
            </div>
         
          

            <motion.p
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity: 1, y:1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className=" mt-8 mb-4"
            >
              Located at South Coast, Silent Palms Villa offer 6 - two-bedroom units spread in the lavish green gardens with stunning serenity. 
The luxury residence is positioned in a prime location a few meters away from the beautiful Diani beach. 

            </motion.p>
            <motion.p
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity: 1, y:1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className=" mb-4"
            >
              
The roof terrace provides you with absolute privacy and gorgeous ocean views.
It features two e-nsuite bedrooms open onto a large private balcony to accommodate 4-6 Pax on self-catering basis, expansive open-plan living, tropical garden and a large terrace overlooking the palms. 

            </motion.p>

            <motion.p
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity: 1, y:1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className=""
            >

The villa architecture is designed to give absolute privacy, suitable for families, couples and group holidays. Long-term stay package available. 
Transfer Services from SGR or Airport can be arranged.
For more information, please call: +254 723750824/ +254 737848157
Special January & February Offers 
- Stay 2 nights Get the 3rd Night FREE!!
- Rate: Kshs 8,000 per night - Bed only
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-8 text-xs underline "
            >
              The Full Story
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-[50vh] md:h-[80vh] relative w-full md:w-1/2 rounded-lg md:rounded-none  "
        >
          <Image src="/images/hero.webp" alt="image" fill className="px-4 md:px-0 rounded-lg md:rounded-none " />
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
