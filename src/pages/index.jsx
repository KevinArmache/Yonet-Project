import WebsiteLayout from "layouts/WebsiteLayout";
import Hero from "components/HomePageSections/Hero";
import Categories from "components/HomePageSections/Categories";
import HowItWorks from "components/HomePageSections/HowItWorks";
import About from "components/HomePageSections/About";
import Action from "components/HomePageSections/Action";
import WebsiteNavbar from "components/Navbars/WebsiteNavbar";

export default function Home() {
  return (
    <div>
      <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
        <Hero />
        <Categories />
        <HowItWorks />
        <About />
        <Action />
      </WebsiteLayout>
    </div>
  );
}
