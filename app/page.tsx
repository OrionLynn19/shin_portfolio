import Image from "next/image";
import pf from "@/public/images/pf.jpg"
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jules Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center gap-8 bg-white">
        <div className="w-full h-48 items-center justify-center flex p-4 mb-2">
          <h1 className="pt-12 text-black xl:text-[12rem] font-bold">
            PORTFOLIO
          </h1>
        </div>
        <div className="relative flex items-center justify-center w-full  ">
          <Image
            className="rounded-lg shadow-lg hover:shadow-3xl transition-shadow duration-300 hover:scale-102 ease-in-out transition-transform border-hidden bg-blend-multiply"
            src={pf}
            alt="Picture of my chit chit"
            width={400}
            height={360}
            priority
          />
        </div>

        <div className="absolute text-crimson  font-[Amsterdam] text-[4rem] top-67 z-30 left-auto right-65 bottom-auto -rotate-[6deg]  " style={{ color: "#ff3131" }}> Jules Suu </div>

        <div className="w-full grid grid-cols-3 gap-4 ">
          <div className="col-span-1 bg-white flex-col px-8">
            <div className="bg-crimson md:w-[240px] md:h-[50px] flex items-center justify-center ml-16 mt-4">
              <h1 className="object-fill text-white font-bold text-[22px] w-full h-full flex items-center justify-center p-0">HELLO, I'M JULES</h1>
            </div>
            <div className="w-[80%] ml-16">
              <div className=" bg-black w-full h-[1px] mt-4 mb-4  " />
              <div className="w-full   text-justify ">
                <p className="text-crimson"> A marketing and customer experience professional currently expanding my capabilities in data and business analytics, applying tools like SQL and Tableau to translate numbers into insights that support smarter marketing and operational decisions.
                </p>
              </div>
              <div className=" bg-black w-full h-[1px] mt-4 mb-4  " />
              <h2 className="text-crimson"> julez.suu24@gamil.com</h2>
              <div className=" bg-black w-full h-[1px] mt-4 mb-4  " />
              <h2 className="text-crimson"> +66 806203576</h2>
              <div className=" bg-black w-full h-[1px] mt-4 mb-4  " />
              <Link href={"/"} className="text-crimson hover:text-black"> LinkedIn  </Link>


            </div>

          </div>
          <div className="col-span-2 bg-gray-200 text-crimson ">
            wassup
          </div>
        </div>

      </main>

    </>
  );
}
