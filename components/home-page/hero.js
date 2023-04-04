import Link from "next/link";

function Hero() {
  return (
    <section className="text-center bg-gradient-to-b from-[#f1f1f1] to-[#f5f5f5] shadow-md">
      <div className="max-w-[700px] m-auto  max-md:max-w-[600px] max-[650px]:max-w-[450px]">
        <h2 className="font-semibold text-[2.4rem] max-[650px]:text-[25px] text-[#343036] p-[20px] leading-[3rem] max-md:leading-[2.2rem] max-[650px]:leading-[2rem] mb-3 max-md:text-[30px]">
          Get organized and boost your productivity with our Pmodoro app!
        </h2>
        <p className="leading-[1.3rem] px-[40px]  max-[430px]:m-auto max-md:text-justify">
          Our easy-to-use timer allows you to break your work into manageable
          chunks, with built-in breaks to help prevent burnout. Stay on track
          with custom task lists and progress tracking. Download now and see the
          difference it can make in your workday!
        </p>
        <button className="px-[27px] py-[11px] rounded-[50px] mb-[5rem] max-md:mb-2 max-[430px]:mb-0 mt-[1.8rem] font-bold transition-all duration-200 bg-[#01ED64] hover:bg-[#00ff6a] border-2 border-black max-[650px]:px-[22px] max-[650px]:py-[7px]">
          <Link
            href="https://github.com/time-mastery/pmodoro-application/releases/"
            target="_blank rel=noopener"
          >
            Get the app
          </Link>
        </button>
      </div>
      <div className="flex justify-center max-[430px]:pb-[30px] max-[430px]:block max-[430px]:px-5">
        <div className="w-[260px] h-[350px] mt-[90px] mr-[70px] max-lg:mr-[20px] max-md:w-[220px] max-md:h-[295px] max-md:mt-[125px] max-[650px]:hidden max-[430px]:block max-[430px]:h-full max-[430px]:mt-[60px]">
          <img
            src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/1.png"
            alt="mobile image"
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="w-[260px] h-[440px] max-md:w-[220px] max-md:h-[370px] max-md:mt-[50px] max-[650px]:mt-[70px] max-[430px]:h-full max-[430px]:m-auto max-[430px]:mt-[-110px]">
          <img
            src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/3.png"
            alt="mobile image"
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="w-[260px] h-[500px] mt-[-60px] ml-[70px] max-lg:ml-[20px] max-md:w-[220px] max-md:h-[420px] max-md:mt-[0px] max-[650px]:mt-[20px] max-[430px]:h-full max-[430px]:ml-[174px] max-[430px]:mt-[-110px]">
          <img
            src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/2.png"
            alt="mobile image"
            className="object-cover object-top w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
