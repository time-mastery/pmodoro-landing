import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-5 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/time-mastery"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-[#01ED64] transition-all duration-300 group"
          >
            <Image 
              src="/icons/github.svg" 
              alt="github" 
              width={20} 
              height={20}
              className="brightness-0 invert group-hover:brightness-0 group-hover:invert transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <Link
            href="mailto:tmasterycontact@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-[#01ED64] transition-all duration-300 group"
          >
            <Image 
              src="/icons/mail.svg" 
              alt="email" 
              width={20} 
              height={20}
              className="brightness-0 invert group-hover:brightness-0 group-hover:invert transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </div>
        <span className="text-gray-400 text-sm md:text-base">
          Copyright © Pmodoro {currentYear}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
