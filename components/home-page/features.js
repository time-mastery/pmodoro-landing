import React from "react";
import Image from "next/image";

function Features() {
  const features = [
    {
      icon: "/icons/tasks.svg",
      title: "Manage Your Tasks",
      description:
        "Organize and prioritize your work with an intuitive task management system. Create, edit, and track your tasks to stay focused on what matters most.",
    },
    {
      icon: "/icons/habits.svg",
      title: "Manage Your Habits",
      description:
        "Build better habits by tracking your daily routines. Set goals, monitor progress, and develop consistent productivity patterns that stick.",
    },
    {
      icon: "/icons/analytics.svg",
      title: "Analytics",
      description:
        "Gain insights into your productivity patterns with detailed analytics. Track your work sessions, breaks, and overall progress to optimize your workflow.",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 bg-gradient-to-b from-white to-[#fafafa]"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-[#1a1a1a]">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to boost productivity and stay organized in one
            comprehensive app
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#01ED64]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative flex justify-center items-center mb-6">
                {/* <div className="absolute inset-0 bg-[#01ED64]/10 rounded-2xl blur-xl group-hover:bg-[#01ED64]/20 transition-all duration-500"></div> */}
                <div className="relative h-16 w-16 bg-gradient-to-br from-[#232323] to-[#232323] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-[#01ED64] group-hover:to-[#00d856] group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="object-contain brightness-0 invert transition-all duration-500"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#01ED64] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
