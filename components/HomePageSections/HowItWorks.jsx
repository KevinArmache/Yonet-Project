import { ArrowRightIcon } from '@heroicons/react/20/solid'
import LinkButtons from 'components/Buttons/LinkButtons'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className='bg-white'>
      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12'>
        <div className=''>
          <h1 className='mb-12 font-sans text-xl font-bold leading-none tracking-tight text-primary sm:text-3xl md:mx-auto'>
            Comment ça marche?
          </h1>
        </div>
        {/* Section for creators */}
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://st4.depositphotos.com/16490812/38513/i/600/depositphotos_385133228-stock-photo-producer-dj-mixer-in-a.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://img.freepik.com/photos-premium/monteur-video-africain-travaillant-images-du-son-editant-nouveau-projet-montage-film-coupe-assis-dans-bureau-agence-moderne_482257-5422.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://static9.depositphotos.com/1518767/1119/i/450/depositphotos_11192648-stock-photo-close-up-of-a-cute.jpg"
                alt=""
              />
            </div>
          </div>
          <div className='flex flex-col justify-center md:ml-10 md:pr-8 xl:pr-0 lg:max-w-lg'>
            <div className="flex mb-6">
              <h1 className='text-secondary font-semibold text-lg lg:text-xl'>
                Pour les Créateurs
              </h1>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-light">
                  <svg
                    className="w-8 h-8 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold text-primary leading-5">
                  Option 1
                </h6>
                <p className="text-sm text-variant">
                  Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                  flail 180 berm. Half-cab camel back ollie transition ledge Wes
                  Humpston 1080.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-light">
                  <svg
                    className="w-8 h-8 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold text-primary leading-5">
                  The powerless in a world
                </h6>
                <p className="text-sm text-variant">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest. Michael
                  Knight a young loner.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-light">
                  <svg
                    className="w-8 h-8 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold text-primary leading-5">
                  Tell them I hate them
                </h6>
                <p className="text-sm text-variant">
                  Chase ball of string eat plants, meow, and throw up because I
                  ate plants going to catch the red dot today going to catch the
                  red dot today. I could pee on this if I had the energy.
                </p>
              </div>
            </div>
            <div className="flex mt-4">
              <LinkButtons url="/pour-les-vendeur" text="En savoir plus" buttonIcon={ArrowRightIcon} />
            </div>
          </div>
        </div>
        {/* End Section for creators */}

        {/* Start for users section */}
        <div className='grid gap-10 lg:grid-cols-2 mt-16'>
          <div className='flex flex-col justify-center md:ml-10 md:pr-8 xl:pr-0 lg:max-w-lg'>
            <div className="flex mb-6">
              <h1 className='text-secondary font-semibold text-lg lg:text-xl'>
                Pour les Clients
              </h1>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-light">
                  <svg
                    className="w-8 h-8 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold text-primary leading-5">
                  Option 1
                </h6>
                <p className="text-sm text-variant">
                  Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                  flail 180 berm. Half-cab camel back ollie transition ledge Wes
                  Humpston 1080.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-light">
                  <svg
                    className="w-8 h-8 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold text-primary leading-5">
                  The powerless in a world
                </h6>
                <p className="text-sm text-variant">
                  The first mate and his Skipper too will do their very best to
                  make the others comfortable in their tropic island nest. Michael
                  Knight a young loner.
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-light">
                  <svg
                    className="w-8 h-8 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold text-primary leading-5">
                  Tell them I hate them
                </h6>
                <p className="text-sm text-variant">
                  Chase ball of string eat plants, meow, and throw up because I
                  ate plants going to catch the red dot today going to catch the
                  red dot today. I could pee on this if I had the energy.
                </p>
              </div>
            </div>
            <div className="flex mt-4">
              <LinkButtons url="/connexion" text="Commencer" buttonIcon={ArrowRightIcon} />
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://cdn.futura-sciences.com/sources/images/qr/studio-audiovideo-enregistrement-youtubeur-1.jpeg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://static.vecteezy.com/ti/photos-gratuite/t2/3653627-asia-girl-radio-host-record-podcast-use-microphone-wear-headphone-interview-celebrity-guest-content-conversation-talk-and-listen-in-her-room-audio-podcast-from-home-concept-de-sonorisation-photo.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1439x508:1441x506)/origin-imgresizer.eurosport.com/2020/05/08/2816174-58088508-2560-1440.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks