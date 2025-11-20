import Link from "next/link";

function Hero() {
  return (
    <section className="relative text-center bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#f0f0f0] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#01ED64] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#01ED64] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 pt-16 max-md:pt-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6 leading-tight tracking-tight max-md:text-4xl max-[650px]:text-3xl">
            Master Your Time with the{" "}
            <span className="bg-gradient-to-r from-[#01ED64] to-[#00d856] bg-clip-text text-transparent">
              Pomodoro Technique
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto px-4 max-md:text-base max-md:px-2">
            Stay productive and focused with Pmodoro, a powerful time management app
            that helps you work smarter. Using the proven Pomodoro technique, work in
            focused 25-minute sessions followed by 5-minute breaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="https://github.com/time-mastery/pmodoro-application/releases/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full font-bold text-base transition-all duration-300 bg-[#01ED64] hover:bg-[#00d856] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 max-[650px]:px-6 max-[650px]:py-3 max-[650px]:text-sm"
            >
              <span className="relative z-10">Get the app</span>
            </Link>
          </div>
        </div>

        {/* Mobile mockups */}
        <div className="relative flex justify-center items-end gap-4 md:gap-8 pt-8">
          <div className="w-[240px] h-[320px] md:w-[260px] md:h-[350px] mt-16 md:mt-20 relative group max-[650px]:hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01ED64]/20 to-transparent rounded-t-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full h-full rounded-t-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/1.png"
                alt="Pmodoro app screenshot"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>

          <div className="w-[240px] h-[400px] md:w-[260px] md:h-[440px] relative group z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01ED64]/30 to-transparent rounded-t-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full h-full rounded-t-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/3.png"
                alt="Pmodoro app screenshot"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>

          <div className="w-[240px] h-[460px] md:w-[260px] md:h-[500px] mt-[-40px] md:mt-[-60px] relative group max-[650px]:hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01ED64]/20 to-transparent rounded-t-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full h-full rounded-t-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/2.png"
                alt="Pmodoro app screenshot"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
