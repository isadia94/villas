import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { SlLocationPin } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { VscMail } from "react-icons/vsc";
import { AiOutlineSend } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";



const Footer = () => {
  return (
    <footer className="w-full bg-green-800 h-full md:h-fit py-4">
      <div className="mx-6 md:mx-20 pb-6 flex flex-col md:flex-row space-y-16 md:space-y-0 md:justify-between  text-white border-b-[0.2px] border-amber-50 ">
        <div className="flex flex-col space-y-6">
          <div>
            <img src="/images/logo.jpeg" className="rounded-full h-16 w-16"  alt="" />
          </div>
          <div className="text-[12px] max-w-[300px] pr-9">Located at South Coast, Silent Palms Villa offer 6 - two-bedroom units spread in the lavish green gardens with stunning serenity. 
The luxury residence is positioned in a prime location a few meters away from the beautiful Diani beach.</div>
        </div>
        <div className="flex flex-col space-y-6 text-[12px] ">
          <h5 className={`border-b-[0.8px] pb-2 w-fit font-bold`}>CONTACT</h5>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <SlLocationPin className="text-xl" />
              <p className="font-bold">Diani,Ukunda,Kenya</p>
            </div>
            <div className="flex items-center space-x-4">
              <SlPhone className="text-xl" />
              <p className="font-bold">
                <Link href="tel:+254798024710">+254 798024710</Link>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <VscMail className="text-xl" />
              <Link
                href="mailto:silentpalmsvilla@gmail.com"
                className="font-bold"
              >
                silentpalmsvilla@gmail.com
              </Link>
            </div>
          </div>
        </div>
      
        <div className="w-full flex flex-col text-[12px] space-y-6  md:max-w-[300px] ">
          <h5 className={`font-bold border-b-[0.8px] pb-2 w-fit`}>
            NEWSLETTER
          </h5>
          <div className="space-y-2">
            <p className="font-bold">
              Subscribe to our newsletter to receive the latest news and offers
            </p>
            <div className="border  border-gray-500 w-full ">
              <form className="flex">
                <input
                  type="email"
                  required
                  placeholder="Enter your Email"
                  className="text-sm text-black outline-none flex-grow pl-2 placeholder:text-sm"
                />
                <div
                  className="px-2 py-2
             bg-amber-400"
                >
                  <button className="border-none flex items-center justify-center">
                    <AiOutlineSend className="text-white text-2xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
          <div className="flex flex-col space-y-6">
            <h5 className={` font-bold`}>
              CONNECT WITH US
            </h5>
            <div className="text-xl flex space-x-7">
              <Link href="https://wa.me/254798024710">
                <BsWhatsapp />
              </Link>
              <Link href="https://www.facebook.com/people/Silent-Palms-Villa-Diani/100076528548033/?paipv=0&eav=AfZ2qpQWze9YsfK4n8GGA2wxyhBYChxAlsA5wsmjTSBJQJvS8Ow2S-9umeKDgu1SG7s&_rdr">
                <BsFacebook />
              </Link>
              <Link href="http://instagram.com/_u/silentpalmsvillas/">
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="pl-6 md:pl-0 md:mx-20 pt-2 text-white">
        <p className="text-xs md:text-[12px]">
          <span>&copy;</span> 2023 Silent Palms Villa - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
