import Action from "components/HomePageSections/Action";
import VendeurHeader from "components/PourLesVendeurs/Header";
import VendeurSteps from "components/PourLesVendeurs/Steps";
import WebsiteLayout from "layouts/WebsiteLayout";

export default function Home() {
  return (
    <WebsiteLayout title="Pour les vendeurs (Professionnels)">
      <VendeurHeader />
      <VendeurSteps />
      <Action />
    </WebsiteLayout>
  );
}