"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";

interface photos {
    src: string;
    alt: string;
}

const photos: photos[] = [
    { src: "/images/gallery_1_1.jpg", alt: "Photo 1" },
    { src: "/images/gallery_1_2.jpg", alt: "Photo 2" },
    { src: "/images/gallery_1_3.jpg", alt: "Photo 3" },
    { src: "/images/gallery-1_4.jpg", alt: "Photo 4" },
    { src: "/images/gallery_1_5.jpg", alt: "Photo 5" },
    { src: "/images/gallery_1_6.jpg", alt: "Photo 6" },
    { src: "/images/gallery_1_7.png ", alt: "Photo 7" },
    { src: "/images/gallery_1_8.jpg", alt: "Photo 8" },
    { src: "/images/gallery_1_9.jpg", alt: "Photo 9" },
    { src: "/images/gallery_1_10.jpg", alt: "Photo 10" },
];

export default function Gallery() {
    const FAST = 100;
    const SLOW = 25;

    const [duration, setDuration] = useState(FAST);
    const [finish, setfinish] = useState(false);
    const [render, setRender] = useState(false);
    
    // NEW: State to track which background photo is active
    const [activeIndex, setActiveIndex] = useState(0);

    let [ref, { width }] = useMeasure();
    const translateX = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -(width / 2) - 8;

        if (finish) {
            controls = animate(translateX, [translateX.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - translateX.get() / finalPosition),
                onComplete: () => {
                    setfinish(false);
                    setRender(!render);
                },
            });
        } else {
            controls = animate(translateX, [0, finalPosition], {
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [translateX, width, duration, finish, render]);

    // NEW: Effect to cycle background images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % photos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.div
                className="flex left-0 top-1/3 gap-4 absolute z-20"
                ref={ref}
                style={{ x: translateX }}
                onHoverStart={() => {
                    setfinish(true);
                    setDuration(FAST);
                }}
                onHoverEnd={() => {
                    setfinish(true); 
                    setDuration(SLOW);
                }}
            >
                {[...photos, ...photos].map((photo, idx) => (
                    <Card key={idx} photo={photo} />
                ))}
            </motion.div>

            <div className="absolute inset-0 z-10 bg-black"> 
                { photos.map((photo, idx) => (
                     // Changed logic: stack all images, but only show the active one via opacity
                     <div 
                        className={`absolute inset-0 transition-all  duration-1000 ease-in-out ${
                            idx === activeIndex ? "opacity-80" : "opacity-0"
                        }`} 
                        key={idx}
                     > 
                        <Image 
                            src={photo.src} 
                            alt={photo.alt}
                            fill 
                            className="object-cover blur-xs" // Optional: blur creates better contrast for foreground cards
                        />    
                      </div>
                 ))} 
                 {/* Overlay to darken background for better readability */}
                
            </div>
        </>
    );
}