import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#f1f1f1]">
      <div className="flex justify-between items-center h-[5rem]  px-[5%] max-w-6xl m-auto">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center list-none gap-11  max-sm:gap-9">
            <li className="">
              <Link href="/#about" scroll={false}>
                About
              </Link>
            </li>

            <li className="">
              <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
                Contact
              </div>

              {open && (
                <div className="gap-2 bg-[#414141] px-2.5 py-[7px] rounded-lg flex items-center absolute mt-1">
                  <Link
                    href="https://github.com/time-mastery"
                    target="_blank rel=noopener"
                    className="w-5 z-10 before:content-[''] before:absolute before:w-[20px] before:h-[2px] before:rounded-[2px] before:-z-0 before:transition-all before:duration-200 before:hover:bg-[#c0c0c0] before:left-[11px] before:top-[1.8rem]"
                  >
                    <Image
                      src="/icons/github.svg"
                      alt="github"
                      width={28}
                      height={20}
                    />
                  </Link>
                  <Link
                    href="mailto:tmasterycontact@gmail.com"
                    target="_blank rel=noopener"
                    className="w-5 z-10 before:content-[''] before:absolute before:w-[20px] before:h-[2px] before:rounded-[2px] before:-z-0 before:transition-all before:duration-200 before:hover:bg-[#c0c0c0] before:right-[11px] before:top-[1.8rem]"
                  >
                    <Image
                      src="/icons/mail.svg"
                      alt="email"
                      width={30}
                      height={18}
                    />
                  </Link>
                </div>
              )}
            </li>
            <li className="">
              <Link
                href="https://github.com/time-mastery/pmodoro-application"
                className="flex items-center justify-center border-2 border-gray-800 rounded-3xl py-[5px] px-[15px] hover:bg-[#01ED64] transition duration-500 font-semibold"
              >
                contribute
                <Image
                  src="/icons/github-black.svg"
                  alt="mobile image"
                  width={15}
                  height={15}
                  className="ml-[6px]"
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
