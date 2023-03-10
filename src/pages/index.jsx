import WebsiteLayout from "layouts/WebsiteLayout";
import Hero from "components/HomePageSections/Hero";
import Categories from "components/HomePageSections/Categories";
import HowItWorks from "components/HomePageSections/HowItWorks";
import About from "components/HomePageSections/About";
import Action from "components/HomePageSections/Action";
import axios from "axios";

export async function getServerSideProps(context) {
  // return the categories

  const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/admin/categories`);
  return {
    props: {
      categories: data.data
    }
  }
}

export default function Home({ categories }) {
  return (
    <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
      <Hero />
      <Categories categories={categories} />
      <HowItWorks />
      <About />
      <Action />
    </WebsiteLayout>
  );
}
