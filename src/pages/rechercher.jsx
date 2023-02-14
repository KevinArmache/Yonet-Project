
import WebsiteLayout from "layouts/WebsiteLayout";
import Action from "components/HomePageSections/Action";
import WebsitePageHeader from "components/Headers/WebsitePageHeader";
import Filter from "components/Headers/Filter";


export default function Rechercher() {
  return (
    <WebsiteLayout title="Résultats de Recherches pour">
      <Filter title="Résultats pour">
        {/* Services grid */}
        <div className="lg:col-span-3">
          {/* Replace with your content */}
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" />
          {/* /End replace */}
        </div>
      </Filter>
      <Action />
    </WebsiteLayout>
  );
}
