"use client";

import { IoArrowForwardCircle } from "react-icons/io5";
import { JetBrains_Mono, Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"]
});


export default function Landing() {
  return (
    <div className="bg-[url(/img/bg.webp)] bg-cover bg-center h-screen w-screen max-sm:justify-items-center max-sm:content-center">
      <div className="w-[450px] h-lvh bg-white rounded-md text-black text-center flex flex-col items-center justify-center max-sm:w-[35vh] max-sm:h-[60vh] max-sm:rounded-3xl">
        <div className={`text-[3rem] font-bold ${raleway.className}`}>Chapp!</div>
        <div className={`font-light ${jetbrainsMono.className}`}>Let’s talk unbounded.</div>
        <Link href="/form">
          <IoArrowForwardCircle size={60} className="cursor-pointer" title="Proceed"/>
        </Link>
      </div>
    </div>
  );
}

