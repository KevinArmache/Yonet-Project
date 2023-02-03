import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import "tailwindcss/tailwind.css";
import WebsiteLayout from "layouts/WebsiteLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
    <h1 className="text-4xl">
      This is Yonet Project!
    </h1>
   </WebsiteLayout>
  );
}
