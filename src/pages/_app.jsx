import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import "@/styles/styles.css";

import { League_Spartan } from "@next/font/google";
import WebsiteNavbar from "components/Navbars/WebsiteNavbar";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={spartan.className}>
      <Component {...pageProps} />
    </div>
  );
}
