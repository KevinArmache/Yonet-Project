import "tailwindcss/tailwind.css";
import WebsiteLayout from "layouts/WebsiteLayout";
import Hero from "components/HomePageSections/Hero";
import Categories from "components/HomePageSections/Categories";


export default function Home() {
  return (
    <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
      <Hero/>
      <Categories />
    </WebsiteLayout>
  );
}
