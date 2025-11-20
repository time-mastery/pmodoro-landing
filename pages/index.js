import Head from "next/head";

import About from "@/components/home-page/about";
import Contributors from "@/components/home-page/contributors";
import Hero from "@/components/home-page/hero";
import Features from "@/components/home-page/features";
import HowItWorks from "@/components/home-page/how-it-works";
import Download from "@/components/home-page/download";

function HomePage() {
  return (
    <>
      <Head>
        <title>Pmodoro - Boost Your Productivity with Pomodoro Technique</title>
        <meta
          name="description"
          content="Stay productive with Pmodoro app. Manage tasks, build habits, and track progress using the proven Pomodoro technique. Available on Android and iOS."
        />
      </Head>
      <Hero />
      <HowItWorks />
      <Features />
      <About />
      <Download />
      <Contributors />
    </>
  );
}

export default HomePage;
