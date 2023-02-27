import "tailwindcss/tailwind.css";
import "@/styles/globals.css";

import { League_Spartan } from "@next/font/google";
import { Toaster } from "react-hot-toast";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={spartan.className}>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}
