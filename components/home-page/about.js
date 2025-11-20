import React from "react";
import Image from "next/image";

function About() {
  const benefits = [
    {
      icon: "/icons/branch.svg",
      title: "Open Source",
      description:
        "Pmodoro is completely open source, which means the code is freely available for anyone to use, modify, and distribute.",
    },
    {
      icon: "/icons/thunder.svg",
      title: "Boost Productivity",
      description:
        "Pmodoro helps you stay focused and on task by breaking up your work into manageable chunks, with built-in breaks to prevent burnout.",
    },
    {
      icon: "/icons/accessibility.svg",
      title: "Progress Tracking",
      description:
        "Keep track of your progress and see how much you've accomplished over time.",
    },
    {
      icon: "/icons/umbrella.svg",
      title: "Easy-to-use Timer",
      description:
        "Pmodoro makes it easy to implement the Pomodoro Technique with its user-friendly interface and customizable timer settings.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-[#fafafa] to-white relative overflow-hidden"
      id="about"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-200 opacity-30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full text-sm md:text-base">
              📱 About Us
            </span>
          </div>
          <h2 className="font-bold text-4xl md:text-6xl mb-6 text-[#1a1a1a] leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#01ED64] to-[#00d856] bg-clip-text text-transparent">
              Pmodoro
            </span>
          </h2>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
              <p className="text-lg md:text-xl text-gray-800">
                Pmodoro helps you stay productive by using the Pomodoro technique, a
                time management method that involves working for 25 minutes and
                taking a 5-minute break. With this app, you can easily set your own
                Pomodoro timer and keep track of your progress.
              </p>
              <p>
                Welcome to our open-source organization! We are dedicated to creating
                top-quality open-source products that are both functional and
                user-friendly. Pmodoro is our flagship product—an easy-to-use timer
                that helps users boost productivity, manage tasks, build habits, and
                stay organized.
              </p>
            </div>
          </div>

          {/* Right side - Timer card with neutral colors */}
          <div className="relative">
            <div className="absolute inset-0 bg-gray-200/50 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">⏱️</span>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-1">
                      25 <span className="text-gray-400">+</span> 5
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Minutes Cycle
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  The proven Pomodoro Technique helps you maintain focus and prevent
                  burnout through structured work and break intervals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gray-200/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-2xl border-2 border-gray-100 group-hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="mb-5">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gray-200/50 rounded-xl blur-md group-hover:bg-gray-300/50 transition-all duration-500"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#1a1a1a] group-hover:text-gray-800 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
