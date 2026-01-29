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

      <main className="flex min-h-screen flex-col items-center gap-8 bg-lightorange">
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

        <div className="absolute text-crimson  font-[Amsterdam] text-[4rem] top-67 z-30 left-auto right-65 bottom-auto -rotate-[6deg]  " style={{ color: "#ff3131" }}> Jules Su </div>

        <div className="w-full grid grid-cols-3 gap-4  ">
          <div className="h-screen col-span-1 bg-lightorange flex-col px-8 mt-22 sticky top-20 self-start ">
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
          <div className="col-span-2 bg-lightorange text-crimson ">
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
                    <div className="bg-crimson text-white rounded-full w-fit px-4 py-2 translate-y-34 font-bold hover:underline hover:scale-105 "> <Link href={'/resume.pdf'}>DOWNLOAD MY RESUME </Link></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-0 top-0  w-full -translate-y-28">
          <div className="col-span-1  w-full h-120  relative ">
            <Image src={"/images/suya_2.jpg"} alt="thae lyy pone" fill />
          </div>
          <div className="col-span-2  w-full flex-col space-y-12">
            <div className="text-crimson text-[4rem] font-bold flex items-center justify-start pl-32"> <h1>EDUCATION</h1></div>
            <div className="px-32 text-crimson font-medium text-xl "><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad? Asperiores quae commodi veritatis dolorum ducimus! Aperiam, perspiciatis, facilis aut consequatur repudiandae, possimus ex quas non repellat est deserunt at.</p></div>
            <div className=" flex w-full   gap-6 pl-32  mt-22">
              <div className="text-crimson ">
                <h1 className="font-bold text-xl"> Rangsit University</h1>
                <p className="mt-2">( Aug 2022 - Dec 2025 ) </p>
              </div>
              <div className="text-crimson">
                <p>Bachelor of Business Administration ( International Business ) </p>
                <h1 className="font-bold text-xl mt-2 ">GPA: 3.72/4 - First Class Honors</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full top-0 ">
          <div className="font-extrabold text-3xl text-crimson px-14 w-full"> WHAT I BRING TO THE TABLE </div>
          <div className="flex text-xl items-center justify-between text-crimson px-14 mt-12 mb-4">
            <div className="bg-crimson text-white font-medium rounded-full border-1 border-crimson px-3 py-4"> COMMUNICATION </div>
            <div className="bg-white text-crimson font-medium rounded-full border-1 border-crimson px-3 py-4"> PROBLEM-SOLVING</div>
            <div className="bg-crimson text-white font-medium rounded-full border-1 border-crimson px-3 py-4"> ATTENTION TO DETAIL</div>
            <div className="bg-white text-crimson font-medium rounded-full border-1 border-crimson px-3 py-4"> TEAMWORK </div>
            <div className="bg-crimson text-white font-medium rounded-full border-1 border-crimson px-3 py-4"> ADAPTABILITY </div>
          </div>
          <div className="w-full grid grid-cols-3 mt-10">
            <div className="col-span-1 flex flex-col px-14 space-y-6 justify-center">
              <div className="text-crimson w-[350px] h-[300px] border-1 rounded-xl border-crimson space-y-3 p-4">
                <div className="flex items-center justify-center mb-8"> logo </div>
                <h1 className="flex justify-center items-center text-xl font-bold">VISUAL CREATION</h1>
                <p className="text-center mt-8 text-sm">
                  I create clean, brand-aligned visuals using photography AI tools, Photoshop and Canva focusing on consistency, clarity, and strong presentation across marketing and e-commerce platforms.
                </p>
              </div>
              <div className="text-crimson w-[350px] h-[300px] border-1 rounded-xl border-black space-y-3 p-4">
                <div className="flex items-center justify-center mb-8"> logo </div>
                <h1 className="flex justify-center items-center text-xl font-bold">OPERATIONS MANAGEMENT</h1>
                <p className="text-center mt-8 text-sm">
                  I manage workflows, documentation, and coordination using Google Workspace, Zoho Books, and Notion to ensure accuracy, organization, and efficient operations.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col px-14 space-y-6">
              <div className="text-crimson w-[350px] h-[300px] border-1 rounded-xl border-black space-y-3 p-4">
                <div className="flex items-center justify-center mb-8"> logo </div>
                <h1 className="flex justify-center items-center text-xl font-bold">SE0 COPYWRITING</h1>
                <p className="text-center mt-8 text-sm">
                  I write SEO-optimized captions, product descriptions and blogs with strategic keyword placement to improve discoverability.
                </p>
              </div>
              <div className="text-crimson w-[350px] h-[300px] border-1 rounded-xl border-crimson space-y-3 p-4">
                <div className="flex items-center justify-center mb-8"> logo </div>
                <h1 className="flex justify-center items-center text-xl font-bold">E-COMMERNCE</h1>
                <p className="text-center mt-8 text-sm">
                  I support website setup and management using Shopify and Wix, organizing product listings and page structures to improve usability and customer experience.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col px-14 space-y-6">
              <div className="text-crimson w-[350px] h-[300px] border-1 rounded-xl border-crimson space-y-3 p-4">
                <div className="flex items-center justify-center mb-8"> logo </div>
                <h1 className="flex justify-center items-center text-xl font-bold">SOCIAL MEDIA MANAGEMENT</h1>
                <p className="text-center mt-8 text-sm">
                  I can plan, schedule, and manage content using Buffer, Meta Ads, and TikTok Ads, supporting audience growth, campaign execution, and performance tracking.
                </p>
              </div>
              <div className="text-crimson w-[350px] h-[300px] border-1 rounded-xl border-black space-y-3 p-4">
                <div className="flex items-center justify-center mb-8"> logo </div>
                <h1 className="flex justify-center items-center text-xl font-bold">DATA ANALYTICS</h1>
                <p className="text-center mt-8 text-sm">
                  I can use basic SQL & Tableau, and Advanced Excel to analyze and interpret data, support reporting and data-informed decision-making.
                </p>
              </div>
            </div>
          </div>

        </section>

        <section  className="w-full top-0"> 
          <div className="pl-14 text-crimson font-bold text-4xl mb-12"> MY CERTIFICATIONS</div>
          <div className="grid grid-cols-3 w-full pl-22 justify-between"> 
            <div className="col-span-1 w-full flex flex-col space-y-2  "> 
              <h1 className="items-start font-bold text-2xl text-crimson mb-12"> Graduation Certificate</h1>
              <div className="relative w-[380px] h-[460px]"><Image src={"/images/gra.jpg"} alt="graduation" fill className="object-cover" /></div>
             

            </div>
            <div className="col-span-1 w-full flex flex-col space-y-2 "> 
              <h1 className="font-bold text-2xl text-crimson mb-12">Business Pitch Competition</h1>
              <Image src={"/images/comp.jpg"} alt="competition" width={380} height={220}/> 
              <p className="text-crimson text-justify pr-14 text-sm leading-relaxed mt-6">I worked closely with a team of two other students and achieved 1st runner-up out of 20 teams in the Business Pitch Competition. We developed a strategic business proposal backed by financial modeling and market analysis. This experience allowed me to apply my analytical skills to a real-world challenge, collaborate closely with a team, and present a data-driven solution that balanced feasibility and innovation.</p>

            </div>
            <div className="col-span-1 w-full flex flex-col space-y-2 "> 
              <h1 className="font-bold text-2xl text-crimson mb-12">Google Data Analytics</h1>
              <Image src={"/images/analytic.jpg"} alt="analytics" width={380} height={220}/>
              <p className="text-crimson text-justify pr-14 text-sm leading-relaxed mt-6"> A haunting thriller that blurs the lines between reality and the supernatural as a young woman confronts her own reflections in an eerie
old mirror.</p> 

            </div>
          
          </div>

        </section>



      </main>

    </>
  );
}
