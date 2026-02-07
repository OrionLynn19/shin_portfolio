"use client";
import Head from "next/head";
import PhotoG from "@/components/Card";
import { useState } from "react";
import Image from "next/image";
import Gallery  from "@/components/Gallery";


const photos = [
    { src: "/images/gallery_1_1.jpg", alt: "Photo 1" },
    { src: "/images/gallery_1_2.jpg", alt: "Photo 2" },
    { src: "/images/gallery_1_3.jpg", alt: "Photo 3" },
    { src: "/images/gallery-1_4.jpg", alt: "Photo 4" },
    { src: "/images/gallery_1_5.jpg", alt: "Photo 5" },
    { src: "/images/gallery_1_6.jpg", alt: "Photo 6" },
    { src: "/images/gallery_1_7.jpg", alt: "Photo 7" },
    { src: "/images/gallery_1_8.jpg", alt: "Photo 8" },
    { src: "/images/gallery_1_9.jpg", alt: "Photo 9" },
    { src: "/images/gallery_1_10.jpg", alt: "Photo 10" },
];

export default function Portfolio() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }


    return (
        <>
            <Head>
                <title>Jules Home Page</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-12 ">
                <div className="px-12 font-extrabold"> <h1 className="text-crimson lg:text-[34px] "> AS A SALE & MARKETING INTERN</h1></div>
                <div className="px-12 mt-8 font-medium leading-relaxed font-arial text-md "> <p className="text-crimson "> I focused on conducting market and trend research while supporting brand growth across marketing, e-commerce, and bespoke client projects. My role required strong coordination, clear communication, and attention to detail, contributing to a more consistent brand presence, improved product presentation, and smoother customer experiences.
                </p></div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 w-full  py-4">
                   
                        <div className="ml-12 relative aspect-[16/9]  sm:col-span-1  group overflow-hidden ">
                            <Image src={photos[0].src} alt={photos[0].alt}
                                fill
                                className="object-cover" 
                                sizes="(max-width: 768px) 100vw,50vw" />

                            <div onClick={openModal} className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <span className=" text-white text-base md:text-lg font-semibold " >
                                    View Gallery
                                </span>
                            </div>
                            {  modalOpen && (
                                <div className="fixed inset-0 bg-lightorange  flex flex-col w-full h-full z-50 absolute" onClick={closeModal}> 
                                <Gallery /> 
                                </div> 
                            ) }

                        </div>
                       <div className="relative aspect-[16/9] mr-12 sm:col-span-1  group overflow-hidden ">
                            <Image src={photos[1].src} alt={photos[1].alt}
                                fill
                                className="object-cover" 
                                sizes="(max-width: 768px) 100vw,50vw" />

                            <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <span className=" text-white text-base md:text-lg font-semibold">
                                    View Gallery
                                </span>
                            </div>

                        </div>
                  
                    <div> </div>
                    <div> </div>
                    <div className="mx-12 border-black border-4">  black </div>
                    <div className="mx-12 border-black border-4"> </div>
                    <div> </div>
                    <div> </div>

                </div>


            </main>

        </>
    )

}