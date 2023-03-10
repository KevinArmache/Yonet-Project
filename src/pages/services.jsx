import React from "react";
import WebsiteLayout from "layouts/WebsiteLayout";
import ServiceDetail from "components/ServiceDetail/ServiceDetail";
import SimilarCard from "components/SimilarCard/SimilarCard";
import RecommendedCard from "components/RecommendedCard/RecommendedCard";

const Services = () => {
  return (
    <>
      <WebsiteLayout title="Les meileurs freelancers dans la création de contenus">
        <div className="container mx-auto">
          <div className="container-filter-bar p-10 ">
            <select name="cars" id="cars">
              <option value="" disabled selected>
                Catégorie
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="" disabled selected>
                Localisation
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="" disabled selected>
                Budget
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="" disabled selected>
                Prestataire
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>

            <input
              type="search"
              name=""
              id=""
              placeholder="Rechercher un service "
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g transform="translate(24 0) scale(-1 1)">
                  <g stroke="#3183ff" stroke-linecap="round" stroke-width="2">
                    <path
                      fill="none"
                      stroke-dasharray="16"
                      stroke-dashoffset="16"
                      d="M10.5 13.5L3 21"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.4s"
                        dur="0.2s"
                        values="16;0"
                      />
                    </path>
                    <path
                      fill="#3183ff"
                      fill-opacity="0"
                      stroke-dasharray="40"
                      stroke-dashoffset="40"
                      d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.4s"
                        values="40;0"
                      />
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.6s"
                        dur="0.15s"
                        values="0;0.3"
                      />
                    </path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <ServiceDetail />
        </div>

        <div className="container-similar-recommended">
          <div className="container-similar mb-12">
            <h3 className="color-gray text-3xl pl-5 font-bold container-similar-recommended-text">
              Services similaires
            </h3>
            <div>
              <SimilarCard />
              <SimilarCard />
              <SimilarCard />
              <SimilarCard />
            </div>
          </div>

          <div className="container-recommended">
            <h3 className="color-gray text-3xl  font-bold container-similar-recommended-text">
              Recommandations
            </h3>
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </div>
        </div>
      </WebsiteLayout>
    </>
  );
};

export default Services;
