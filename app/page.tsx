'use client'; 
import Image from "next/image";
import pf from "@/public/images/pf.jpg"
import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';


export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>Jules Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-lightorange min-h-screen md:flex md:flex-col md:items-center md:gap-8">
        {/* Header */}
        <div className="w-full flex items-center justify-center p-4 mb-2 md:h-48 md:mb-2">
          <h1 className="pt-8 text-4xl sm:text-6xl font-bold text-black md:pt-12 md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
            PORTFOLIO
          </h1>
        </div>

        {/* Profile Image */}
        <div className="relative flex items-center justify-center w-full px-4 md:px-0">
          <Image
            className="w-[320px] h-[3%0px] sm:w-[350px] sm:h-[370px] md:w-[400px] md:h-[500px] rounded-lg shadow-lg hover:shadow-3xl transition-shadow duration-300 hover:scale-102 ease-in-out transition-transform border-hidden bg-blend-multiply"
            src={pf}
            alt="Picture of my chit chit"
              
            priority
           
          />
        </div>

        {/* Name Overlay */}
        <div className="text-center mt-4 font-[Amsterdam] text-5xl text-crimson md:absolute md:top-67 md:z-30 md:left-auto md:right-65 md:bottom-auto md:-rotate-[6deg] md:text-[4rem]" style={{ color: "#ff3131" }}>
          Jules Su
        </div>

        {/* Main Content Grid */}
        <div className="w-full grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 md:gap-4 md:mt-0">
          {/* Sidebar */}
          <div className="px-6 py-8 bg-lightorange md:h-screen md:col-span-1 md:flex-col md:px-8 md:mt-22 md:sticky md:top-20 md:self-start">
            <div className="bg-crimson w-full lg:w-[60%] lg:ml-16 h-[50px] flex items-center justify-center mx-auto mb-8">
              <h1 className="text-white font-bold text-lg sm:text-xl md:text-[16px]">HELLO, I'M JULES</h1>
            </div>
            
            <div className="w-full max-w-md mx-auto lg:w-[80%] lg:ml-16">
              <div className="bg-black w-full h-[1px] mt-4 mb-4" />
              <div className="w-full text-justify text-center">
                <p className="text-crimson leading-relaxed text-sm sm:text-base md:text-sm ">
                  A marketing and customer experience professional currently expanding my capabilities in data and business analytics, applying tools like SQL and Tableau to translate numbers into insights that support smarter marketing and operational decisions.
                </p>
              </div>
              <div className="bg-black w-full h-[1px] mt-6 mb-6" />
              <h2 className="text-crimson text-sm sm:text-base md:text-sm break-all">julez.suu24@gamil.com</h2>
              <div className="bg-black w-full h-[1px] mt-6 mb-6" />
              <h2 className="text-crimson text-sm sm:text-base">+66 806203576</h2>
              <div className="bg-black w-full h-[1px] mt-6 mb-6" />
              <Link href={"/"} className="text-crimson hover:text-black hover:underline text-sm sm:text-base">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className=" col-span-1 bg-lightorange text-crimson px-6 md:col-span-2 md:px-0">
            {/* About Me Section */}
            <section className="min-h-[50vh] mb-12 md:h-[90vh] md:mr-10">
              <div className="flex-col md:px-12 md:top-7 md:relative">
                <div className="bg-black w-full h-[1px] mt-8 mb-4 md:mt-43" />
                <h1 className="font-bold mb-6 mt-6 text-xl sm:text-2xl md:text-[1rem] md:mb-8">About me</h1>
                <div className="space-y-4 text-justify text-sm sm:text-base md:space-y-8 lg:space-y-12 lg:text-lg">
                  <p>A fresh business graduate and a dual citizen with a passion for blending creativity and strategy. I see my work as being the person who bridges marketing, customer engagement, and event operations with a strong focus on delivering professional experiences aligned with the brand and the customer's expectations. I'm a big believer in talking things through, solving problems together and enjoy bringing structure to creative ideas and turning them into real outcomes.</p>
                  <div className={`${expanded ? '' : 'line-clamp-1 md:line-clamp-2 lg:line-clamp-none'} overflow-hidden lg:overflow-visible`}>
                    <p>I've worked in fast-paced, people-facing environments with international audiences, which means I've learned how to read the room, adapt quickly, and stay calm when plans change. Outside of work, I'm known for being upbeat, easy to work with, and the kind of person who keeps things positive. More than anything, I love seeing ideas bounce around and projects come to life — not just the final result, but the process of working together to get there.</p>
                    <p>I'm always up for new challenges, and I'm excited to keep growing and finding opportunities that let me combine creativity, strategy, and impact.</p>
                  </div>
                  <button className="lg:block lg:hidden text-crimson underline  " onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Show less' : 'Show more'}
                  </button>
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="  flex flex-col items-center justify-start relative md:top-24 pb-12  md:pb-0">
              <div className=" font-bold text-3xl text-center mb-8 sm:text-4xl md:text-[2rem] lg:text-5xl ">
                WORK EXPERIENCE
              </div>
              <div className="w-full h-[40%] mt-4  md:min-h-screen relative">
                <div className="relative h-[20%] w-fit flex flex-col pl-8 md:h-[80%] md:ml-16">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black z-0 md:left-0 lg:-top-32" />

                  {/* Job 1 */}
                  <div className="flex items-start mb-8 pt-2 relative md:items-center md:mb-12">
                    <div className="rounded-full w-8 h-4 bg-white border-1 border-crimson z-10 absolute left-0 top-4 md:top-12 -translate-x-8 md:-translate-x-14 md:w-12 md:h-6 " />
                    <div className="ml-8 sm:ml-12 md:ml-12 lg:ml-18 md:translate-y-8">
                      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">SALES & MARKETING INTERN</h1>
                      <h2 className="mt-2 text-sm sm:text-base md:mt-4">The Trinket Company</h2>
                      <p className="text-xs sm:text-sm md:text-base">Jul 2025 - Dec 2025</p>
                      <p className="text-xs sm:text-sm md:text-base">Bangkok, Thailand</p>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="flex items-start mb-8 relative md:items-center md:mb-12 md:pt-4">
                    <div className="rounded-full w-8 h-4 bg-white border-1 border-crimson z-10 absolute left-0 top-2 md:top-12 -translate-x-8 md:-translate-x-14 md:w-12 md:h-6 " />
                    <div className="ml-8 sm:ml-12 md:ml-12 lg:ml-18 md:translate-y-8">
                      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">ACTIVITY PROVIDER</h1>
                      <h2 className="mt-2 text-sm sm:text-base md:mt-4">Harrow International School Bangkok</h2>
                      <p className="text-xs sm:text-sm md:text-base">Jun 2024 - Feb 2025</p>
                      <p className="text-xs sm:text-sm md:text-base">Bangkok, Thailand</p>
                    </div>
                  </div>

                  {/* Job 3 */}
                  <div className="flex items-start relative md:items-center md:pt-4">
                    <div className="rounded-full w-8 h-4 bg-white border-1 border-crimson z-10 absolute left-0 top-2 md:top-12 -translate-x-8 md:-translate-x-14 md:w-12 md:h-6 " />
                    <div className="ml-8 sm:ml-12 md:ml-12 lg:ml-18 md:translate-y-8">
                      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">ASSISTANT WORKSHOP FACILITOR</h1>
                      <h2 className="mt-2 text-sm sm:text-base md:mt-4">Soap Opera Bangkok</h2>
                      <p className="text-xs sm:text-sm md:text-base">Oct 2023 - Dec 2024</p>
                      <p className="text-xs sm:text-sm md:text-base">Bangkok, Thailand</p>
                    </div>
                  </div>
                  
                  {/* Resume Button */}
                  <div
                    className="
                      absolute
                      right-0
                      -bottom-12
                      z-20
                      sm:-right-4
                      md:right-8
                      md:-bottom-24
                      lg:top-auto
                      lg:-right-8
                      lg:tranlslate-x-12
                      lg:-bottom-24
                      w-fit h-fit
                    "
                  >
                    <Link
                      href={'/resume.pdf'}
                      className="bg-crimson text-white rounded-full px-4 py-2 font-bold hover:underline hover:scale-105 text-xs sm:text-base md:text-lg shadow-lg transition"
                    >
                      DOWNLOAD MY RESUME
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Education Section */}
        <div className="lg:grid  w-full mt-8 lg:grid-cols-3 lg:mt-0 md:top-0 ">
          <div className="flex justify-center  ml-4 w-[90%] md:ml-8 md:rounded-full  lg:col-span-1  md:items-center  md:justify-center lg:w-full h-64 relative sm:h-80 md:h-120">
            <Image src={"/images/suya_2.jpg"} alt="thae lyy pone" fill className="object-cover" />
          </div>
          <div className="col-span-1 w-full flex-col space-y-6 px-6 py-8 md:col-span-2 md:space-y-12 md:px-0">
            <div className="text-crimson text-3xl font-bold flex items-center justify-start sm:text-4xl md:text-[4rem] md:pl-8 lg:pl-32">
              <h1>EDUCATION</h1>
            </div>
            <div className="text-crimson font-medium text-sm sm:text-base md:text-xl lg:px-32 md:px-8">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad? Asperiores quae commodi veritatis dolorum ducimus! Aperiam, perspiciatis, facilis aut consequatur repudiandae, possimus ex quas non repellat est deserunt at.</p>
            </div>
            <div className="flex flex-col w-full gap-4 sm:flex-row md:gap-6 md:pl-8 lg:pl-32 md:mt-22">
              <div className="text-crimson">
                <h1 className="font-bold text-lg sm:text-xl">Rangsit University</h1>
                <p className="mt-2 text-sm sm:text-base">( Aug 2022 - Dec 2025 )</p>
              </div>
              <div className="text-crimson">
                <p className="text-md sm:text-base">Bachelor of Business Administration&nbsp; ( International Business )</p>
                <h1 className="font-bold text-lg mt-2 sm:text-xl md:mt-2">GPA: 3.72/4 - First Class Honors</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="w-full top-0 px-6 py-8 md:px-0">
          <div className="font-extrabold text-xl  sm:text-2xl text-crimson mb-6 sm:text-3xl md:px-14 md:mb-0">
            WHAT I BRING TO THE TABLE
          </div>
          
          {/* Skills Pills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-center justify-center text-sm text-crimson mt-8 mb-8  sm:text-base md:text-xl md:justify-between md:px-14 md:mt-12 md:mb-4">
            <div className="bg-crimson text-white text-xs sm:text-sm md:text-md lg:text-lg rounded-full border-1 border-crimson px-3 py-2 md:px-3 md:py-4">
              COMMUNICATION
            </div>
            <div className="bg-white text-crimson text-xs sm:text-sm md:text-md  lg:text-md font-bold   rounded-full border-1 border-crimson px-3 py-2 md:px-3 md:py-4">
              PROBLEM-SOLVING
            </div>
            <div className="items-center justify-center bg-crimson text-white text-xs sm:text-sm md:text-md lg:text-sm sm:w-full w-fit ml-[calc(50%-5rem)] sm:ml-0 rounded-full border-1 border-crimson px-3 py-2 md:px-3 md:py-4 col-span-2 sm:col-span-1">
              ATTENTION TO DETAIL
            </div>
            <div className="bg-white text-crimson text-xs sm:text-sm md:text-md font-bold lg:text-md  rounded-full border-1 border-crimson px-3 py-2 md:px-3 md:py-4">
              TEAMWORK
            </div>
            <div className="bg-crimson text-white text-xs sm:text-sm md:text-md lg:text-lg rounded-full border-1 border-crimson px-3 py-2 md:px-3 md:py-4">
              ADAPTABILITY
            </div>
          </div>

          {/* Skills Cards Grid */}
          <div className="w-full grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 md:px-14 lg:px-8">
            {/* Card 1 */}
            <div className="text-crimson w-full  lg:w-auto lg:h-auto  mx-auto h-auto border-1 rounded-xl border-crimson space-y-3 p-4 sm:max-w-none md:w-full ">
              <div className="flex items-center justify-center mb-6 lg:mb-8">logo</div>
              <h1 className="flex justify-center items-center text-lg font-bold sm:text-xl md:text-sm">VISUAL CREATION</h1>
              <p className="text-center mt-6 text-xs leading-relaxed sm:text-sm md:mt-0 md:text-xs">
                I create clean, brand-aligned visuals using photography AI tools, Photoshop and Canva focusing on consistency, clarity, and strong presentation across marketing and e-commerce platforms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-crimson w-full  lg:w-auto lg:h-auto  mx-auto h-auto border-1 rounded-xl border-crimson space-y-3 p-4 sm:max-w-none md:w-full">
              <div className="flex items-center justify-center mb-6 lg:mb-8">logo</div>
              <h1 className="flex justify-center items-center text-lg font-bold sm:text-xl md:text-xs">SEO COPYWRITING</h1>
              <p className="text-justify  mt-6 text-xs leading-relaxed sm:text-sm md:mt-0 md:text-md">
                I write SEO-optimized captions, product descriptions and blogs with strategic keyword placement to improve discoverability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-crimson w-full  lg:w-auto lg:h-auto  mx-auto h-auto border-1 rounded-xl border-crimson space-y-3 p-4 sm:max-w-none md:w-full">
              <div className="flex items-center justify-center mb-6 lg:mb-8">logo</div>
              <h1 className="flex justify-center items-center text-lg font-bold sm:text-lg md:text-sm pl-0 md:pl-10 lg:pl-0">SOCIAL MEDIA MANAGEMENT</h1>
              <p className="text-justify mt-6 text-xs leading-relaxed sm:text-sm md:mt-0 md:text-xs">
                I can plan, schedule, and manage content using Buffer, Meta Ads, and TikTok Ads, supporting audience growth, campaign execution, and performance tracking.
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-crimson w-full  lg:w-auto lg:h-auto  mx-auto h-auto border-1 rounded-xl border-crimson space-y-3 p-4 sm:max-w-none md:w-full">
              <div className="flex items-center justify-center mb-6 lg:mb-8">logo</div>
              <h1 className="flex justify-center items-center text-lg font-bold sm:text-lg md:text-sm pl-0 md:pl-10 lg:pl-0">OPERATIONS MANAGEMENT</h1>
              <p className="text-justify mt-6 text-xs leading-relaxed sm:text-sm md:mt-0 md:text-xs">
                I manage workflows, documentation, and coordination using Google Workspace, Zoho Books, and Notion to ensure accuracy, organization, and efficient operations.
              </p>
            </div>

            {/* Card 5 */}
            <div className="text-crimson w-full  lg:w-auto lg:h-auto  mx-auto h-auto border-1 rounded-xl border-crimson space-y-3 p-4 sm:max-w-none md:w-full">
              <div className="flex items-center justify-center mb-6 lg:mb-8">logo</div>
              <h1 className="flex justify-center items-center text-lg font-bold sm:text-xl md:text-sm">E-COMMERCE</h1>
              <p className="text-justify mt-6 text-xs leading-relaxed sm:text-sm md:mt-0 md:text-xs">
                I support website setup and management using Shopify and Wix, organizing product listings and page structures to improve usability and customer experience.
              </p>
            </div>

            {/* Card 6 */}
            <div className="text-crimson w-full  lg:w-auto lg:h-auto  mx-auto h-auto border-1 rounded-xl border-crimson space-y-3 p-4 sm:max-w-none md:w-full">
              <div className="flex items-center justify-center mb-6 lg:mb-8">logo</div>
              <h1 className="flex justify-center items-center text-lg font-bold sm:text-xl md:text-sm">DATA ANALYTICS</h1>
              <p className="text-justify mt-6 text-xs leading-relaxed sm:text-sm md:mt-0 md:text-md">
                I can use basic SQL & Tableau, and Advanced Excel to analyze and interpret data, support reporting and data-informed decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="w-full top-0 px-6 py-8 md:px-2">
          <div className="text-crimson font-bold text-xl lg:text-2xl mb-8 sm:text-3xl md:text-4xl md:pl-14 md:mb-12 ">
            MY CERTIFICATIONS
          </div>
          
          <div className="grid grid-cols-1 w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 md:pl-4 lg:pl-2">
            {/* Cert 1 */}
            <div className="col-span-1 w-full flex flex-col space-y-2">
              <h1 className="font-bold text-xl text-crimson mb-6 sm:text-2xl lg:mb-12 md:pl-12 lg:pl-4">Graduation Certificate</h1>
              <div className="relative w-full h-[400px] sm:h-[460px] md:w-[380px] md:h-[460px] lg:w-full">
                <Image src={"/images/gra.jpg"} alt="graduation" fill className="object-cover rounded-lg" />
              </div>
            </div>

            {/* Cert 2 */}
            <div className="col-span-1 w-full flex flex-col space-y-2 ">
              <h1 className="font-bold text-xl text-crimson mb-6 sm:text-2xl md:mb-12 lg:ml-0 lg:text-xl lg:whitespace-nowrap">Business Pitch Competition</h1>
              <div className="relative w-[90%] lg:w-full  h-[220px] lg:ml-4 ">
                <Image src={"/images/comp.jpg"} alt="competition" fill className="object-cover rounded-lg" />
              </div>
              <p className="text-crimson text-justify text-sm leading-relaxed mt-4 sm:text-sm md:pr-14 md:mt-6 lg:pr-0 md:font-bold lg:font-normal font-normal lg:ml-4">
                I worked closely with a team of two other students and achieved 1st runner-up out of 20 teams in the Business Pitch Competition. We developed a strategic business proposal backed by financial modeling and market analysis. This experience allowed me to apply my analytical skills to a real-world challenge, collaborate closely with a team, and present a data-driven solution that balanced feasibility and innovation.
              </p>
            </div>

            {/* Cert 3 */}
            <div className="col-span-1 w-full flex flex-col space-y-2">
              <h1 className="font-bold text-xl text-crimson mb-6 sm:text-2xl md:mb-12">Google Data Analytics</h1>
              <div className="relative w-full h-[220px]">
                <Image src={"/images/analytic.jpg"} alt="analytics" fill className="object-cover rounded-lg" />
              </div>
              <p className="text-crimson text-justify text-sm leading-relaxed mt-4 sm:text-sm md:pr-14 lg:pr-0 md:mt-6 md:font-bold font-normal lg:font-normal">
                A haunting thriller that blurs the lines between reality and the supernatural as a young woman confronts her own reflections in an eerie old mirror.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}