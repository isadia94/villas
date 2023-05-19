import ClientLayout from '@/components/ClientLayout'
import Image from 'next/image'

import { Cormorant } from "next/font/google";
import localFont from 'next/font/local'


const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600", "700"],
});

const Activities = () => {
  return (
    <ClientLayout>
        <div className='px-4 mb-32 h-full w-full'>
        <div  className={`${cormorant.className} text-[90px] font-bold text-green-800`}>
          <h1>ACTIVITIES</h1>
     
        </div>

            <div className='h-[80vh] w-full flex items-center mb-12'>
                <div className='relative h-full w-1/2 aspect-square'>
                    <Image src="/images/beach.jpg" alt fill/>
                </div>
                <p className='w-[500px] mx-auto font-semibold flex  justify-center items-center'>From the moment you arrive, the soothing sound of crashing waves and the salty breeze envelop you, transporting you to a world of relaxation and rejuvenation. Sink your toes into the warm sand as you stroll along the shore, feeling the gentle caress of the ocean against your skin. Engage in exciting water activities like swimming, surfing, or snorkeling, immersing yourself in the thrill of the sea. Indulge in delicious seafood delicacies while savoring the breathtaking views of the horizon. Whether you prefer basking under the sun, building sandcastles with loved ones, or simply enjoying a peaceful beachside read, this immersive beach life experience promises to awaken your senses and leave you with lasting memories of tranquility and joy.</p>
            </div>
            <div className='h-[80vh] w-full flex items-center mb-12'>
            <p className='w-[500px] mx-auto font-semibold flex  justify-center items-center'>Discover the Hidden Depths: Snorkelling Adventure Awaits." Immerse yourself in a world teeming with vibrant marine life and fascinating underwater landscapes. Equipped with a snorkel and mask, plunge into crystal-clear waters, where a kaleidoscope of colors awaits your gaze. Float effortlessly above coral reefs, observing their intricate formations and the myriad of fish darting among them. Be mesmerized by the graceful dance of sea turtles, as they gracefully glide through the depths. With each breath, you connect with the rhythm of the ocean, feeling the cool water against your skin and the gentle currents guiding you along. Snorkelling offers a gateway to a hidden realm of wonder and serenity, where you can leave behind the worries of the world and immerse yourself in the awe-inspiring beauty of nature's underwater paradise.</p>
                <div className='relative h-full w-1/2 aspect-square'>
                    <Image src="/images/snorka.jpg" alt fill/>
                </div>
               
            </div>
            <div className='h-[80vh] w-full flex items-center mb-12'>
                <div className='relative h-full w-1/2 aspect-square'>
                    <Image src="/images/raft.jpg" alt fill/>
                </div>
                <p className='w-[500px] mx-auto font-semibold flex  justify-center items-center'>Kayaking offers an exhilarating escape into the realm of water and nature. As you settle into your kayak, you become one with the gentle current, gliding along pristine waterways. With each paddle stroke, you propel yourself forward, feeling a sense of freedom and serenity wash over you. The rhythmic motion of your paddle becomes a symphony, harmonizing with the sounds of nature that surround you. As you navigate through tranquil lakes, winding rivers, or even adventurous rapids, you witness the beauty of untouched landscapes and wildlife in their natural habitat. Whether you embark on a solo adventure or join a group, kayaking becomes a gateway to discovery, a way to connect with nature, and a source of pure joy as you embrace the magic of the water and create memories that will last a lifetime.</p>
            </div>
            <div className='h-[80vh] w-full flex items-center mb-12'>
            <p className='w-[500px] mx-auto font-semibold flex  justify-center items-center'>Engage in an extraordinary journey through the untamed wilderness of Tsavo, where an awe-inspiring animal kingdom awaits your exploration. Step into a realm where mighty elephants roam freely, their majestic presence leaving you in awe. Witness graceful giraffes as they elegantly stretch their long necks to reach the leaves of towering acacia trees. Marvel at the stealth and power of Tsavo's predators, from lions to cheetahs, as they navigate the vast savannah in search of their next meal. Encounter a multitude of bird species, their vibrant plumage adding splashes of color to the surrounding landscape. As you traverse this wildlife haven, guided by experienced rangers, you'll gain a deeper understanding of the delicate balance of nature and the importance of conservation. Immerse yourself in the sights, sounds, and sensations of Tsavo's animal kingdom, creating memories that will forever be etched in your heart.</p>
                <div className='relative h-full w-1/2 aspect-square'>
                    <Image src="/images/wild.jpg" alt fill/>
                </div>
              
            </div>
         
            
            
           
        </div>
    </ClientLayout>
  )
}

export default Activities
