import "tailwindcss/tailwind.css";
import WebsiteLayout from "layouts/WebsiteLayout";
import Hero from "components/HomePageSections/Hero";


export default function Home() {
  return (
    <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
      <Hero/>
    </WebsiteLayout>
  );
}
