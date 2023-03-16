import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className="mt-[50px] mb-[35px] text-center" id="about">
      <h2 className="font-bold text-2xl mb-6">About us</h2>
      <p className="max-w-[700px] max-md:max-w-[600px] m-auto mb-12 font-medium px-5 text-justify leading-5 max-[680px]:px-14">
        Welcome to our open-source organization! We are dedicated to creating
        top-quality open-source products that are both functional and
        user-friendly. Our flagship product is the Pomodoro app, an easy-to-use
        timer that helps users boost productivity and stay organized.
      </p>
      <div className="flex justify-center p-4 max-w-[1000px] max-auto m-auto max-[680px]:block">
        <div className="grow shrink basis-0 items-center justify-center max-[680px]:py-[20px]">
          <div className="h-[30px] relative flex justify-center items-center before:content-[''] before:bg-[#ECECEC] before:absolute before:w-[60px] before:h-[60px] max-md:before:h-[50px] max-md:before:w-[50px] before:rounded-[50px] before:-z-10 before:transition-all before:duration-300 before:hover:bg-[#01ED64]">
            <Image
              src="/icons/branch.svg"
              alt="mobile image"
              width={20}
              height={26}
            />
          </div>
          <h3 className="mt-[21px] mb-2 text-lg font-bold text-[13px]">
            Open Source
          </h3>
          <p className="px-[25px] leading-[1.2rem] max-md:text-[13px] max-md:px-[9px] max-md:leading-[1rem] max-[680px]:px-[50px]">
            Pmodoro is completely open source, which means the code is freely
            available for anyone to use, modify, and distribute.
          </p>
        </div>
        <div className="grow shrink basis-0 items-center justify-center max-[680px]:py-[20px]">
          <div className="h-[30px] relative flex justify-center items-center before:content-[''] before:bg-[#ECECEC] before:absolute before:w-[60px] before:h-[60px] max-md:before:h-[50px] max-md:before:w-[50px] before:rounded-[50px] before:-z-10 before:transition-all before:duration-300 hover:before:bg-[#01ED64]">
            <Image
              src="/icons/thunder.svg"
              alt="mobile image"
              width={13}
              height={26}
            />
          </div>
          <h3 className="mt-[21px] mb-2 text-lg font-bold text-[13px]">
            Boost Productivity
          </h3>
          <p className="px-[25px] leading-[1.2rem] max-md:text-[13px] max-md:px-[9px] max-md:leading-[1rem] max-[680px]:px-[50px]">
            Pmodoro helps you stay focused and on task by breaking up your work
            into manageable chunks, with built-in breaks to prevent burnout.
          </p>
        </div>
        <div className="grow shrink basis-0 items-center justify-center max-[680px]:py-[20px]">
          <div className="h-[30px] relative flex justify-center items-center before:content-[''] before:bg-[#ECECEC] before:absolute before:w-[60px] before:h-[60px] max-md:before:h-[50px] max-md:before:w-[50px] before:rounded-[50px] before:-z-10 before:transition-all before:duration-300 hover:before:bg-[#01ED64]">
            <Image
              src="/icons/accessibility.svg"
              alt="mobile image"
              width={24}
              height={26}
            />
          </div>
          <h3 className="mt-[21px] mb-2 text-lg font-bold text-[13px]">
            Progress Tracking
          </h3>
          <p className="px-[25px] leading-[1.2rem] max-md:text-[13px] max-md:px-[9px] max-md:leading-[1rem] max-[680px]:px-[50px]">
            Keep track of your progress and see how much you've accomplished
            over time.
          </p>
        </div>
        <div className="grow shrink basis-0 items-center justify-center max-[680px]:py-[20px]">
          <div className="h-[30px] relative flex justify-center items-center before:content-[''] before:bg-[#ECECEC] before:absolute before:w-[60px] before:h-[60px] max-md:before:h-[50px] max-md:before:w-[50px] before:rounded-[50px] before:-z-10 before:transition-all before:duration-300 hover:before:bg-[#01ED64]">
            <Image
              src="/icons/umbrella.svg"
              alt="mobile image"
              width={24}
              height={26}
            />
          </div>
          <h3 className="mt-[21px] mb-2 text-lg font-bold text-[13px]">
            Easy-to-use Timer
          </h3>
          <p className="px-[25px] leading-[1.2rem] max-md:text-[13px] max-md:px-[9px] max-md:leading-[1rem] max-[680px]:px-[50px]">
            Pmodoro makes it easy to implement the Pomodoro Technique with its
            user-friendly interface and customizable timer settings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
