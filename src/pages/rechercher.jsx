
import WebsiteLayout from "layouts/WebsiteLayout";
import Action from "components/HomePageSections/Action";
import Filter from "components/Headers/Filter";
import ServiceCard from "components/Cards/ServiceCard";


export default function Rechercher() {
  return (
    <WebsiteLayout title="Résultats de Recherches pour">
      <Filter title="Résultats pour">
        {/* Services grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard />
          </div>
        </div>
      </Filter>
      <Action />
    </WebsiteLayout>
  );
}
