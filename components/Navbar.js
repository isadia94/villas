import Link from "next/link";

import { SlLocationPin } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { VscMail } from "react-icons/vsc";
import { AiOutlineSend } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";




const Navbar = () => {
  const Links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Accomodations",
      link: "/accomodation",
    },
   
    {
      title: "Activities",
      link: "/activities",
    },
   
    
    {
      title: "Rates",
      link: "/rates",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    // {
    //   title: "Location",
    //   link: "/location",
    // },
    
    {
      title: "FAQS",
      link: "/faqs",
    },
    
  ];
  return (
    <div>
      <div className="border-b-[0.8px] py-2 px-4 w-full  text-[12px] flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm">
          <SlPhone className="text-sm" />
          <p className="text-xs">
            <Link href="tel:+254798024710">+254 798024710</Link>
          </p>
        </div>
        <div className="flex space-x-8 items-center text-xl ">
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
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center space-x-3">
        <div className="relative h-16 w-16 rounded-full">
          <Image
            src="/images/logo.jpeg"
            alt="logo"
            fill
            className="rounded-full"
          />
        </div>
        <div className="max-w-[200px]">
          
          <h5 className="md:text-[22px] font-extrabold leading-none text-green-800">SILENT PALMS VILLAS DIANI</h5>
        </div>
        </div>
       
        <div className="flex items-center space-x-12">
          <ul className="text-[14px] items-center space-x-10 hidden md:flex">
            {Links.splice(0, 8).map(({ title, link }, index) => {
              return (
                <li key={index}>
                  <Link href={link} className={` text-[15px] text-green-800 capitalize`}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/reservation"
            className=" text-white bg-green-800 px-4 py-3"
          >
            RESERVATION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
