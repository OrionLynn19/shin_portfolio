import React, { useState }  from "react";
import Image from "next/image"; 
import { AnimatePresence, motion } from "framer-motion";

interface CardProps {
  photo : {src: string ; alt: string}; 
  
}


export default function Card({photo} : CardProps) { 
  const [showOverlYay, setShowOverlay] = useState(false);



  return ( 
    <> 
    <motion.div className="relative overflow-hidden h-[400px] min-w-[400px] bg-slate-400 flex items-center justify-center rounded-xl "
    onHoverStart={()=> setShowOverlay(true)}
    onHoverEnd={()=> setShowOverlay(false)}>
     <AnimatePresence> 
      {showOverlYay && (
        <motion.div className="absolute inset-0 z-10 flex justify-center items-center  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
          <div className="pointer-events-none w-full h-full  bg-black opacity-50 "> </div> 
        </motion.div> 
      )} 
      </AnimatePresence>

      <Image src={photo.src} alt={photo.alt} 
        fill
        className="object-cover" 
        sizes="(max-width: 768px) 100vw,50vw" />
    </motion.div>
    </>
  )
}