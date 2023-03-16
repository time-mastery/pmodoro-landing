import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black flex justify-between items-center -z-10">
      <div className="ml-[11px] p-[15px] flex items-center">
        <Link
          href="https://github.com/time-mastery"
          target="_blank rel=noopener"
          className="relative z-10 px-2 flex justify-center items-center icon"
        >
          <Image src="/icons/github.svg" alt="github" width={23} height={15} />
        </Link>
        <Link
          href="mailto:tmasterycontact@gmail.com"
          target="_blank rel=noopener"
          className="relative z-10 px-2 flex justify-center items-center icon"
        >
          <Image src="/icons/mail.svg" alt="email" width={23} height={14} />
        </Link>
      </div>
      <span className="text-[#ffffffba] text-[12px] mr-[35px]">
        Copyright © Pmodoro 2023
      </span>
    </footer>
  );
}

export default Footer;
