import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/solid'
import WebsiteLayout from 'layouts/WebsiteLayout'
import React from 'react'

const VendorProfile = () => {
  return (
    <WebsiteLayout title="Profile Vendeur" solid>
      <main className="profile-page -my-16">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-light fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-light h-full">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white backdrop-filter backdrop-blur-lg bg-opacity-70 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/asset/images/profile.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-primary active:bg-slate-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Contacter
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          22
                        </span>
                        <span className="text-sm text-secondary">
                          Commandes
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          10
                        </span>
                        <span className="text-sm text-secondary">
                          Services
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          89
                        </span>
                        <span className="text-sm text-secondary">
                          Avis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 text-slate-400 font-bold uppercase flex items-center justify-center">
                    <MapPinIcon className='mr-2 w-5 h-5 text-slate-400' />{" "}
                    Paris, France
                  </div>
                  <div className="mb-2 text-slate-600 mt-4 flex items-center justify-center">
                    <BriefcaseIcon className='mr-2 w-5 h-5 text-slate-400' />
                    Graphiste | Voix Off
                  </div>
                  <div className="mb-2 text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis id? Et dignissimos iusto saepe maiores placeat ad similique laboriosam. Fugit vitae ut explicabo ducimus maiores accusamus deserunt quisquam aliquid?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </WebsiteLayout>
  )
}

export default VendorProfile