import React, { Fragment, useState } from 'react'
import Link from 'next/link';
import SearchForm from 'components/Forms/SearchForm';
import CategoriesDropDown from 'components/DropDowns/CategoriesDropDown';
import { Transition } from '@headlessui/react';

const WebsiteNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);


  return (
      <nav className='sticky rounded top-0 z-50 bg-light backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-md'>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className='flex items-center justify-start space-x-12'>
              <Link href="/" className="text-2xl lg:text-4xl text-primary font-semibold lg:font-bold">
                Yonet!
              </Link>
              <div className="hidden text-sm font-semibold lg:flex space-x-4 text-gray-900">
                <Link href="/" className="text-secondary uppercase">
                  à Propos
                </Link>
                <CategoriesDropDown />
              </div>
              <div className="hidden lg:flex space-x-4">
                <SearchForm />
              </div>
            </div>
            <div className='hidden lg:flex items-center space-x-4'>
              <button
                className='text-sm font-medium px-4 py-2 bg-transparent text-primary hover:text-white hover:bg-primary rounded uppercase'
              >
                Connexion
              </button>
              <button
                className='text-sm font-medium px-4 py-2 bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary uppercase rounded'
              >
                Pour les vendeurs
              </button>
            </div>
            <div className="lg:hidden">
              <div className="flex items-center justify-center">
                <button
                  aria-label="Open SearchBar"
                  title="Open SearchBar"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsSearchBarVisible(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-primary" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
              </div>

              {isSearchBarVisible && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  show={isSearchBarVisible}
                >
                  <div className="absolute z-50 top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-2xl text-primary font-semibold lg:font-bold">
                            Rechercher un Service
                          </h2>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-primary focus:bg-primary focus:outline-none focus:shadow-outline"
                            onClick={() => setIsSearchBarVisible(false)}
                          >
                            <svg className="w-5 text-primary hover:text-white" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav className='block'>
                        <SearchForm />
                      </nav>
                    </div>
                  </div>
                </Transition>
              )}

              {isMenuOpen && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  show={isMenuOpen}
                >
                  <div className="absolute z-50 top-0 left-0 w-full">
                    <div className="p-5 bg-white h-screen border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <Link href="/" className="text-2xl text-primary font-semibold lg:font-bold">
                            Yonet!
                          </Link>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-primary focus:bg-primary focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-5 text-primary hover:text-white" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <Link href="/" className="text-secondary text-base">
                              Accueil
                            </Link>
                          </li>
                          <li>
                            <CategoriesDropDown />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Transition>
              )}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default WebsiteNavbar