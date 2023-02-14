
import WebsiteLayout from "layouts/WebsiteLayout";
import Action from "components/HomePageSections/Action";
import WebsitePageHeader from "components/Headers/WebsitePageHeader";


export default function Rechercher() {
  return (
    <WebsiteLayout title="Résultats de Recherches pour">
      <WebsitePageHeader title="Résultats de Recherches pour" />
      <Action />
    </WebsiteLayout>
  );
}
