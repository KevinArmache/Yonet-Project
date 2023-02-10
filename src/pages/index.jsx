import "tailwindcss/tailwind.css";
import WebsiteLayout from "layouts/WebsiteLayout";
import Hero from "components/HomePageSections/Hero";
import Categories from "components/HomePageSections/Categories";
import HowItWorks from "components/HomePageSections/HowItWorks";
import About from "components/HomePageSections/About";
import Action from "components/HomePageSections/Action";


export default function Home() {
  return (
    <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
      <Hero/>
      <Categories />
      <HowItWorks />
      <About/>
      <Action />
    </WebsiteLayout>
  );
}
