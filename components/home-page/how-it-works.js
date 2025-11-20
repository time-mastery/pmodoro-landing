import React from "react";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Set Your Timer",
      description:
        "Start a 25-minute work session focused on a single task. The timer helps you maintain concentration and avoid distractions.",
    },
    {
      number: "2",
      title: "Work Focused",
      description:
        "Dedicate yourself completely to your task during the work period. No interruptions, no multitasking—just pure focus.",
    },
    {
      number: "3",
      title: "Take a Break",
      description:
        "After 25 minutes, take a well-deserved 5-minute break. Step away, relax, and recharge for your next session.",
    },
    {
      number: "4",
      title: "Repeat & Track",
      description:
        "Repeat the cycle and watch your productivity soar. Track your progress and see how much you accomplish over time.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] to-white"></div>
      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-[#1a1a1a]">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Pomodoro Technique is a proven time management method that breaks
            work into focused intervals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#01ED64]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-[#01ED64] to-[#00d856] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 mt-6 text-[#1a1a1a] group-hover:text-[#01ED64] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-[#01ED64]/10 via-white to-[#01ED64]/5 rounded-3xl p-8 md:p-12 shadow-lg border border-[#01ED64]/20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#01ED64] to-[#00d856] bg-clip-text text-transparent">
                25
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium mt-1">Minutes</div>
            </div>
            <div className="text-3xl md:text-4xl text-[#01ED64] font-bold">+</div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#01ED64] to-[#00d856] bg-clip-text text-transparent">
                5
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium mt-1">Minutes</div>
            </div>
          </div>
          <p className="text-center text-gray-700 font-medium text-base md:text-lg leading-relaxed">
            Work for 25 minutes, then take a 5-minute break. This simple rhythm
            helps maintain focus and prevents burnout, making you more productive
            throughout the day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

