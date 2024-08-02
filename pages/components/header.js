import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [


  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/projects', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header({ toggleTheme, theme, isOpen, toggleSidebar }) {

  const logoClass = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/logo_dark1.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/logo.png';
  const bgImage = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dark_blur.jpg' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tech1.png';
  const strokeClass = theme === 'dark' ? "#ffffff" : "#2f2f2f";
  const bgColor = theme === 'dark' ? "bg-white text-slate-900" : "bg-black text-white";
  const sideBar = theme === 'dark' ? "bg-neutral-800 text-slate-200" : "bg-cyan-50 text-slate-900";
  const bgClass = `url(${bgImage})`;

  return (
    <div
            className="bg-fixed bg-cover bg-center divide-neutral-300"
            style={{ backgroundImage: bgClass }}
          >

    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 z-20">
            <div className="relative flex h-12 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Transition
                  show={!isOpen}
                  enter="transition ease-out duration-300"
                  enterFrom="transform opacity-0 -translate-x-full"
                  enterTo="transform opacity-100 translate-x-0"
                  leave="transition ease-in duration-300"
                  leaveFrom="transform opacity-100 translate-x-0"
                  leaveTo="transform opacity-0 -translate-x-full"
                >
                  <Link href={{ pathname: '/' }} passHref>
                    <Image
                      className="block w-auto lg:hidden ml-10"
                      src={logoClass}
                      width={80}
                      height={20}
                    />
                    <Image
                      className="hidden w-auto lg:block ml-10"
                      src={logoClass}
                      width={80}
                      height={20}
                    />
                  </Link>
                </Transition>
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <button onClick={toggleSidebar} className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" stroke={strokeClass} aria-hidden="true" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={strokeClass} class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>

                    )}
                  </button>
                </div>
              </div>
              <div className="block md:hidden">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="theme"
                      value="light"
                      id="lightMode"
                      className="hidden"
                      onChange={toggleTheme}
                      checked={theme === 'light'}
                    />
                    <label
                      htmlFor="lightMode"
                      className="flex items-center cursor-pointer space-x-1"
                    >
                      <SunIcon className="w-6 h-6 text-yellow-500" />
                      <span className="sr-only">Light Mode</span>
                    </label>
                    
                    <input
                      type="radio"
                      name="theme"
                      value="dark"
                      id="darkMode"
                      className="hidden"
                      onChange={toggleTheme}
                      checked={theme === 'dark'}
                    />
                    <label
                      htmlFor="darkMode"
                      className="flex items-center cursor-pointer space-x-1"
                    >
                      <MoonIcon className="w-6 h-6 text-gray-800" />
                      <span className="sr-only">Dark Mode</span>
                    </label>
                  </div>
              </div>
              <div className="hidden sm:block">
              <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="theme"
                        value="light"
                        id="lightModeDesktop"
                        className="hidden"
                        onChange={toggleTheme}
                        checked={theme === 'light'}
                      />
                      <label
                        htmlFor="lightModeDesktop"
                        className="flex items-center cursor-pointer space-x-1"
                      >
                        <SunIcon className="w-6 h-6 text-yellow-500" />
                        <span className="sr-only">Light Mode</span>
                      </label>
                      
                      <input
                        type="radio"
                        name="theme"
                        value="dark"
                        id="darkModeDesktop"
                        className="hidden"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                      />
                      <label
                        htmlFor="darkModeDesktop"
                        className="flex items-center cursor-pointer space-x-1"
                      >
                        <MoonIcon className="w-6 h-6 text-gray-800" />
                        <span className="sr-only">Dark Mode</span>
                      </label>
                    </div>
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
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

            <div className={`z-10 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : 'md:-translate-x-48 -translate-x-full'} transition-transform ${sideBar} duration-300 ease-in-out md:w-60 w-full px-4`}>
            <div className="flex my-2 md:my-0">
              <button 
                className={`relative ${isOpen ? 'md:ml-0 mt-2' : 'md:ml-44'} ml-full p-2 ${bgColor} hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`} 
                onClick={toggleSidebar}>
                  {isOpen ? (
                    <XMarkIcon className="block md:h-6 md:w-6 w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block md:h-8 md:w-8 w-4 h-4" aria-hidden="true" />
                  )}
              </button>
              <Link href={{pathname: '/'}} passHref className="ml-6 mt-2">
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
            <h1 className="text-2xl font-bold mt-4">Sidebar</h1>
              <ul>
                <li className="mt-4">Item 1</li>
                <li className="mt-4">Item 2</li>
                <li className="mt-4">Item 3</li>
              </ul>
            </div>
        </>
      )}
    </Disclosure>
    </div>
  )
}
