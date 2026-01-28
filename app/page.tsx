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

        <div className="w-full grid grid-cols-3 gap-4  ">
          <div className="h-screen col-span-1 bg-white flex-col px-8 mt-22 sticky top-20 self-start ">
            <div className="bg-crimson md:w-[240px] md:h-[50px] flex items-center justify-center ml-16 mb-8">
              <h1 className="object-fill text-white font-bold text-[22px] w-full h-full flex items-center justify-center p-0">HELLO, I'M JULES</h1>
            </div>
            <div className="w-[80%] ml-16 ">
              <div className=" bg-black w-full h-[1px] mt-4 mb-4  " />
              <div className="w-full   text-justify ">
                <p className="text-crimson leading-relaxed"> A marketing and customer experience professional currently expanding my capabilities in data and business analytics, applying tools like SQL and Tableau to translate numbers into insights that support smarter marketing and operational decisions.
                </p>
              </div>
              <div className=" bg-black w-full h-[1px] mt-6 mb-6  " />
              <h2 className="text-crimson"> julez.suu24@gamil.com</h2>
              <div className=" bg-black w-full h-[1px] mt-6 mb-6  " />
              <h2 className="text-crimson"> +66 806203576</h2>
              <div className=" bg-black w-full h-[1px] mt-6 mb-6  " />
              <Link href={"/"} className="text-crimson hover:text-black hover:underline"> LinkedIn  </Link>


            </div>

          </div>
          <div className="col-span-2 bg-white text-crimson ">
            <section className="h-[90vh] mr-10 bottom-0" >
              <div className="px-22 flex-col">
                <div className="bg-black w-full h-[1px] mt-43 mb-4" />
                <h1 className="font-bold mb-8 mt-6 text-[1rem]">About me</h1>
                <div className="space-y-8 text-justify">
                  <p> A fresh business graduate and a dual citizen with a passion for blending creativity and strategy. I see my work as being the person who bridges marketing, customer engagement, and event operations with a strong focus on delivering professional experiences aligned with the brand and the customer’s expectations. I’m a big believer in talking things through, solving problems together and enjoy bringing structure to creative ideas and turning them into real outcomes.</p>
                  <p> I’ve worked in fast-paced, people-facing environments with international audiences, which means I’ve learned how to read the room, adapt quickly, and stay calm when plans change. Outside of work, I’m known for being upbeat, easy to work with, and the kind of person who keeps things positive. More than anything, I love seeing ideas bounce around and projects come to life — not just the final result, but the process of working together to get there. </p>
                  <p> I’m always up for new challenges, and I’m excited to keep growing and finding opportunities that let me combine creativity, strategy, and impact.</p>
                </div>
              </div>

            </section>
            <section className="h-screen flex flex-col items-center justify-start relative top-0 ">
              <div className="font-bold text-[3rem] -translate-x-20 mt-2"> WORK EXPERIENCE</div>
              <div className="flex w-full h-screen mt-8">
                <div className="relative h-[80%] flex flex-col  ml-16 ">
               
                  <div className="absolute left-0 -top-32 bottom-0 w-0.5 bg-black z-0" />

                 
                  <div className="flex items-center mb-12 pt-2 relative">
                    <div className="rounded-full w-12 h-6 bg-white border-1 border-crimson z-10 absolute left-1 -translate-x-1/2" />
                    <div className="ml-24 translate-y-8 ">
                      <h1 className="font-bold text-2xl"> SALES & MARKETING INTERN</h1>
                      <h2 className="mt-4"> The Trinket Company</h2>
                      <p>Jul 2025 - Dec 2025</p>
                      <p>Bangkok, Thailand</p>

                    </div>
                  </div>
            
                  <div className="flex items-center mb-12 relative pt-4">
                    <div className="rounded-full w-12 h-6 bg-white border-1 border-crimson z-10 absolute left-1 -translate-x-1/2" />
                    <div className="ml-24 translate-y-8 ">
                      <h1 className="font-bold text-2xl"> ACTIVITY PROVIDER</h1>
                      <h2 className="mt-4">Harrow International School Bangkok</h2>
                      <p>Jun 2024 - Feb 2025</p>
                      <p>Bangkok, Thailand</p>

                    </div>
                  </div>
             
                  <div className="flex items-center relative pt-4">
                    <div className="rounded-full w-12 h-6 bg-white border-1 border-crimson z-10 absolute left-1 -translate-x-1/2" />
                    <div className="ml-24 translate-y-8 ">
                      <h1 className="font-bold text-2xl">ASSISTANT WORKSHOP FACILITOR</h1>
                      <h2 className="mt-4"> Soap Opera Bangkok</h2>
                      <p>Oct 2023 - Dec 2024</p>
                      <p>Bangkok, Thailand</p>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </main>

    </>
  );
}
