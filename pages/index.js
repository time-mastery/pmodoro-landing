import Head from "next/head";

import About from "@/components/home-page/about";
import Contributors from "@/components/home-page/contributors";
import Hero from "@/components/home-page/hero";

function HomePage() {
  return (
    <>
      <Head>
        <title>Pmodoro</title>
      </Head>
      <Hero />
      <About />
      <Contributors />
    </>
  );
}

export default HomePage;
