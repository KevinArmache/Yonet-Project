import React from 'react'
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const userNavigation = [
  { name: 'Mon compte', href: '/app/client/' },
  { name: 'Paramètres', href: '/app/client/parametres' },
  { name: 'Commandes', href: '/app/client/commandes' },
  { name: 'Favoris', href: '/app/client/favoris' },
  { name: "Compte Vendeur", href: "/app/vendeur" }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UserDropDown = () => {

  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';

  return (
    <div className="flex items-center space-x-4">
      {isLoadingUser ? (
        <div className="h-8 w-[75px] bg-gray-200 animate-pulse rounded-md" />
      ) : (
        <Menu as="div" className="relative z-50 ml-3">
          <div>
            <Menu.Button className="flex max-w-xs items-center rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
              <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                {user?.image ? (
                  <Image
                    src={user?.image}
                    alt={user?.name || 'Avatar'}
                    layout="fill"
                  />
                ) : (
                  <UserIcon className="text-gray-400 w-6 h-6" />
                )}
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none">
            <div className="flex items-center space-x-1 py-4 px-4 mb-2">
              <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                {user?.image ? (
                  <Image
                    src={user?.image}
                    alt={user?.name || 'Avatar'}
                    layout="fill"
                  />
                  ) : (
                    <UserIcon className="text-gray-400 w-6 h-6" />
                  )}
              </div>
              <div className="flex flex-col truncate">
                <span>{user?.name}</span>
                <span className="text-xs text-gray-500">
                  {user?.email}
                </span>
              </div>
            </div>

            <div className="py-2">
              {userNavigation.map(
                (item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={classNames(
                          active ? 'bg-primary text-white' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                )
              )}
              <Menu.Item>
                <button
                  className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-primary hover:text-white text-sm"
                  onClick={signOut}
                >
                  <span>
                    Déconnexion
                  </span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )}  
    </div>
  )


};

export default UserDropDown;