import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.js";

function MainNavigation() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center h-[5rem] px-[5%] max-w-6xl m-auto">
        <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center list-none gap-8 md:gap-11 max-sm:gap-6">
            <li>
              <Link
                href="/#about"
                scroll={false}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            <li>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="cursor-pointer text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="bg-[#414141] rounded-2xl p-2 w-auto border-none shadow-lg">
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://github.com/time-mastery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#525252] transition-colors duration-200"
                    >
                      <Image
                        src="/icons/github.svg"
                        alt="github"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </Link>
                    <Link
                      href="mailto:tmasterycontact@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#525252] transition-colors duration-200"
                    >
                      <Image
                        src="/icons/mail.svg"
                        alt="email"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </li>
            <li>
              <Link
                href="https://github.com/time-mastery/pmodoro-application"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-gray-800 rounded-full py-2 px-4 md:px-6 hover:bg-[#01ED64] hover:border-[#01ED64] transition-all duration-300 font-semibold text-sm md:text-base hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contribute
                <Image
                  src="/icons/github-black.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
