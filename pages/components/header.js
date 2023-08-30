import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [


  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/projects', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header({ toggleTheme, theme }) {

  const logoClass = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/logo_dark1.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/logo.png';
  const bgImage = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dark_blur.jpg' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tech1.png';
  const strokeClass = theme === 'dark' ? "#ffffff" : "#2f2f2f";
  const bgColor = theme === 'dark' ? "bg-white text-slate-900" : "bg-black text-white";
  const bgClass = `url(${bgImage})`;

  return (
    <div
            className="bg-fixed bg-cover bg-center divide-neutral-300"
            style={{ backgroundImage: bgClass }}
          >

    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={strokeClass} class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link href={{pathname: '/'}} passHref>
                  <Image
                    className="block w-auto lg:hidden"
                    src={logoClass}
                    width={80}
                    height={20}
                  />
                  <Image
                    className="hidden w-auto lg:block"
                    src={logoClass}
                    width={80}
                    height={20}
                  />
              </Link>
                
              </div>
              <div className="block md:hidden">
                <select className={`px-1 pb-1 pt-2 rounded ${bgColor}`} id="themeToggle" onChange={toggleTheme}>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div className="hidden sm:block">
              <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <select className= {`px-1 pb-1 pt-2 rounded ${bgColor}`} id="themeToggle" onChange={toggleTheme}>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
                <button
                  type="button"
                  className="ml-4 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 ">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className="h-7 w-7 rounded-full bg-white" aria-hidden="true" />

                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
