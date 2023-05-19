import { useState } from "react";
import Image from "next/image";
import { AiOutlineWifi } from "react-icons/ai";
import { FaSwimmingPool } from "react-icons/fa";
import { MdKitchen,MdKingBed,MdScreenshotMonitor, MdStarRate } from "react-icons/md";
import {HiUsers} from 'react-icons/hi'
import Link from "next/link";
import PersonalModal from "./PersonalModal";

import { Collapse } from "react-collapse";

const HorizontalCard = ({title, description, price, image, guests,rooms,link}) => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="h-full">
      <div className="mt-10 w-full">
        <div className="shadow-2xl px-4 py-4">
        <div className="flex space-x-8  ">
          <div className="relative h-[300px] min-w-[400px]">
            <Image src={image} alt={title} fill />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between w-full">
              <h4 className="text-3xl font-semibold ">{title}</h4>
                 <p className="text-sm underline">Full Details</p></div>
           
            <div className="flex space-x-1">
            <p className="text-yellow-500"><MdStarRate/></p>
            <p className="text-yellow-500"><MdStarRate/></p>
            <p className="text-yellow-500"><MdStarRate/></p>
            <p className="text-yellow-500"><MdStarRate/></p>
            <p className="text-yellow-500"><MdStarRate/></p>
            </div>

            <div className="mt-4 flex space-x-2">
              <div className="flex space-x-2">
              <p><HiUsers/></p>
              <p className="text-slate-500 text-xs">{guests}-Guests</p>
              </div>
              <div className="flex space-x-2 items-center">
              <p><MdKingBed/></p>
              {rooms < 2?<p className="text-xs text-slate-500">{rooms}-bedroom</p>:<p className="text-xs text-slate-500">{rooms}-bedrooms</p>}
             
              </div>
           
            </div>
            <div className="flex items-center space-x-4 text-[18px] mt-6 text-slate-500  ">
              <AiOutlineWifi />
              <FaSwimmingPool />
              <MdKingBed />
              <MdKitchen />
              <MdScreenshotMonitor />
            </div>
            
            </div>
           
            <p className="text-sm pr-4">
           {description}
            </p>

            

            <div className="flex items-center justify-between w-full">
              <div>
                <span className="text-sm  text-yellow-500">From</span>
                <p className="text-3xl -mt-2 font-bold">KES {price}<span className="text-sm font-light"> per night</span></p>
              </div>
             
              <button className="bg-green-800  px-5 py-3 font-bold text-sm  text-white" onClick={()=>setIsOpen(true)}>
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div>
        <Collapse isOpened={open}>
        <div className={open?"active":"inactive"}>
        <PersonalModal onClose={() => setIsOpen(false)}/>
        </div>
        </Collapse>
        </div>
       
        
        
        </div>
        
      </div>
  
       
          
        
   
    </div>
  );
};

export default HorizontalCard;
