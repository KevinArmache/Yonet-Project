import "tailwindcss/tailwind.css";
import "@/styles/globals.css";

import { League_Spartan } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/yonet.ico" />
      </Head>
      <div className={spartan.className}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </>
  );
}
