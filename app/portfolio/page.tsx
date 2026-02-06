import Head from "next/head";
import PhotoGallery from "@/components/Photogallery";


    const photos = [
  { src: "/images/gallery_1_1.jpg", alt: "Photo 1" },
  { src: "/images/gallery_1_2.jpg", alt: "Photo 2" },
    { src: "/images/gallery_1_3.jpg", alt: "Photo 3" },
    { src: "/images/gallery-1_4.jpg", alt: "Photo 4" },
    { src: "/images/gallery_1_5.jpg", alt: "Photo 5" },
];

export default function Portfolio() {




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
                <PhotoGallery photos={photos} /> 
            </main>

        </>
    )

}