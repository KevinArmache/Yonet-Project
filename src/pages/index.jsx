import WebsiteLayout from "layouts/WebsiteLayout";
import Hero from "components/HomePageSections/Hero";
import Categories from "components/HomePageSections/Categories";
import HowItWorks from "components/HomePageSections/HowItWorks";
import About from "components/HomePageSections/About";
import Action from "components/HomePageSections/Action";
import axios from "axios";
import { getSession } from "next-auth/react"

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/admin/categories`);

  return {
    props: {
      session: await getSession(ctx),
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
