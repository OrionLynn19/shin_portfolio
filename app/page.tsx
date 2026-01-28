import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-8 bg-white"> 
        <div className="w-full h-48 items-center justify-center flex p-4"> 
          <h1 className="text-black text-[10rem] font-bold">
            PORTFOLIO
          </h1>
        </div>
        <div> 
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

      </main>
    </>
  );
}
