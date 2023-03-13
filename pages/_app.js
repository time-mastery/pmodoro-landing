import { Dosis } from "@next/font/google";

import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

const dosis = Dosis({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={dosis.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
