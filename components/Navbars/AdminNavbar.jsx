import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import UserDropDown from 'components/DropDowns/UserDropDown'


const navigation = [
  { name: 'Tableau de bord', href: '/admin', current: true },
  { name: 'Utilisateurs', href: '/admin/users', current: false },
  { name: 'Categories', href: '/admin/categories', current: false },
  { name: 'Transactions', href: '/admin/transactions', current: false },
  { name: 'Vendeurs', href: '/admin/vendeurs', current: false },
  { name: 'Paiements', href: '/admin/payments', current: false },
  { name: 'Rapports', href: '/admin/rapports', current: false },
  { name: 'Signalement', href: '/admin/signalement', current: false },
]

const userNavigation = [
  { name: 'Profil', href: '/app/client/profil' },
  { name: 'Paramètres', href: '/app/client/parametres' },
  { name: 'Commandes', href: '/app/client/commandes' },
  { name: 'Favoris', href: '/app/client/favoris' },
  { name: "Compte Vendeur", href: "/app/vendeur" }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const AdminNavbar = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-50">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <Link
                      href="/admin"
                      className="text-2xl lg:text-4xl text-primary font-semibold lg:font-bold"
                    >
                      Yonet!
                    </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              router.pathname.includes(item.href.split('/')[2])
                                ? 'bg-primary text-white'
                                : 'text-gray-300 hover:second-variant hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <UserDropDown />
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden min-h-screen">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        router.pathname.includes(item.href.split('/')[2]) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={router.pathname.includes(item.href.split('/')[2]) ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  {isLoadingUser ? (
                    <div className="h-8 w-[75px] bg-gray-200 animate-pulse rounded-md" />
                  ) : (
                    <>
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          {user?.image ? (
                            <Image
                              src={user?.image}
                              alt={user?.name || 'Avatar'}
                              width={32}
                              height={32}
                            />
                          ) : (
                            <UserIcon className="text-gray-400 w-6 h-6" />
                          )}
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">{user?.name}</div>
                          <div className="text-sm font-medium leading-none text-gray-400">{user?.email}</div>
                        </div>
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Disclosure.Button
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          onClick={signOut}
                        >
                          Déconnexion
                        </Disclosure.Button>
                      </div>
                    </>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
  )
}

export default AdminNavbar