'use client'

import { ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../utils/breadcrumb';
import { usePathname } from 'next/navigation';
import { useAppContext } from '../context/AppContext';



  


export default function Projects() {

  const router = usePathname();
  const query = router;
  const queryParts = query.split('/');
  const lastQueryPart = queryParts[queryParts.length - 1];
  const { theme, isOpen } = useAppContext();

  const themeClass = theme === 'dark' ? 'text-white bg-black' : 'text-black bg-white';
  const themeFont1 = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';
  const themeFont2 = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const imageClass = theme === 'dark' ? 'brightness-90' : '';
  const logoClass = theme === 'dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github_dark.png' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/github.svg';
  const bgImage = theme ==='dark' ? 'https://ducaqjqbmh7lv.cloudfront.net/mysite/dark_blur.jpg' : 'https://ducaqjqbmh7lv.cloudfront.net/mysite/tech1.png';
  const bgClass = `url(${bgImage})`;
  const marginLeft = isOpen ? 'md:ml-60' : 'md:ml-10';



  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 min-h-screen text-white font-serif">
      {/* Header */}
      <header className="bg-transparent py-6">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-4xl font-bold">Home of Mine</div>
          <ul className="flex space-x-8 text-lg">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md hover:bg-gray-800">Sign In</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 flex items-center justify-center relative">
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Introduction</h1>
          <p className="text-lg text-gray-300 mb-8">
            This is the home of mine. Here you will find all the details about my skills, portfolio, and much more. Explore and enjoy the experience.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-500 transition duration-300">Explore More</button>
            <button className="text-gray-300 border border-gray-300 px-6 py-3 rounded-md text-lg hover:bg-gray-700 transition duration-300">Contact Me</button>
          </div>
        </div>
        <div className="hidden md:block absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="rounded-full bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg h-96 w-96 flex items-center justify-center">
              <img src="https://via.placeholder.com/400x400" alt="Hero Image" className="w-full rounded-full shadow-2xl" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-gray-800 bg-opacity-70 p-4 rounded-full">
                <p className="text-white font-bold">Skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-transparent py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 rounded-lg bg-gray-800 shadow-lg">
              <img src="https://via.placeholder.com/80x80" alt="Skill Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Skill One</h3>
            </div>
            <div className="p-8 rounded-lg bg-gray-800 shadow-lg">
              <img src="https://via.placeholder.com/80x80" alt="Skill Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Skill Two</h3>
            </div>
            <div className="p-8 rounded-lg bg-gray-800 shadow-lg">
              <img src="https://via.placeholder.com/80x80" alt="Skill Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Skill Three</h3>
            </div>
            <div className="p-8 rounded-lg bg-gray-800 shadow-lg">
              <img src="https://via.placeholder.com/80x80" alt="Skill Icon" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Skill Four</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-transparent py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Project Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-400">Description of project one goes here. It's a great project that showcases skills and expertise.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Project Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-400">Description of project two goes here. It's a great project that showcases skills and expertise.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Project Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-400">Description of project three goes here. It's a great project that showcases skills and expertise.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Project Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Four</h3>
              <p className="text-gray-400">Description of project four goes here. It's a great project that showcases skills and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-transparent py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blog Post One</h3>
              <p className="text-gray-400">Summary of the blog post goes here. Discuss the topic and invite readers to explore more.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blog Post Two</h3>
              <p className="text-gray-400">Summary of the blog post goes here. Discuss the topic and invite readers to explore more.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post Image" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blog Post Three</h3>
              <p className="text-gray-400">Summary of the blog post goes here. Discuss the topic and invite readers to explore more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Home of Mine. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
