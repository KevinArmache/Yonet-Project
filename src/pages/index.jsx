import { Inter } from "@next/font/google";
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
