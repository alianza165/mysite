import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Feature from './components/feature';
import Link from 'next/link';

export default function Main() {
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleMouseEnter = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
      videoRefs[index].current.currentTime = 0; // Reset video to start
    }
  };

  return (
    <div className="bg-gradient-to-tr from-slate-200">
    <Feature />
    <p className='text-center px-4 md:px-12 pt-8 pb-16 md:py-12 text-4xl font-bold underline decoration-1 font-sans'> Projects </p>
      <div className="relative grid grid-cols-1 gap-x-6 gap-y-16 px-4 md:px-12 md:grid-cols-2 md:gap-x-8">
        
        <div
          className="md:p-2 bg-gradient-to-tr from-sky-100 rounded-md shadow-xl"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <div className='border -mt-6 p-2 mx-auto text-center text-white w-40 skew-x-6 bg-black block md:hidden'>
              Dashboards
          </div>
          <p className='px-4 pt-2 hidden sm:block'>Dashboards</p>
          <div className="hover:scale-110 md:hover:scale-125 p-4 transition-all">
            <video ref={videoRefs[0]} className="opacity-90 object-cover border" loop muted>
              <source src="/dashboard.mp4" />
            </video>
          </div>
          <div className='block md:hidden'>
            <div className="p-8 md:p-12 border bg-white grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3 md:gap-x-4">
              <p className='text-xs md:text-sm col-span-2 mr-2 pr-2 border-double border-r-4 border-b-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              </p>
              <div className='ml-4 text-xs md:text-sm'>
                <p className='font-mono bg-slate-100 -mb-3 w-24 mx-auto text-center border'> Tech Stack </p>
                <ul class="list-inside border p-2 divide-y list-image-[url(7.svg)]">
                  <li className='mt-4'>Django Rest Framework</li>
                  <li>React</li>
                  <li>NextJs</li>
                  <li>Tailwind</li>
                  <li>AWS EC2</li>
                  <li>Vercel</li>
                </ul>
                <Link href='/projects/dashboard'>
                  <p className='p-1 bg-indigo-600 hover:bg-indigo-300 italic transition-all rounded-md mt-2 mx-auto text-center'>Learn More</p>
                </Link>
              </div>
            </div>
        </div>
        </div>
        <div className='hidden sm:block'>
          <div className='border -mb-6 p-2 mx-auto text-center text-white w-40 relative skew-x-6 bg-black '>
            Dashboards
          </div>
          <div className="p-8 md:p-12 border bg-white grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3 md:gap-x-4">
            <p className='text-xs md:text-sm col-span-2 mr-2 pr-2 border-double border-r-4 border-b-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            </p>
            <div className='ml-4 text-xs md:text-sm'>
              <p className='font-mono bg-slate-100 -mb-3 w-24 mx-auto text-center border'> Tech Stack </p>
              <ul class="list-inside border p-2 divide-y list-image-[url(7.svg)]">
                <li className='mt-4'>Django Rest Framework</li>
                <li>React</li>
                <li>NextJs</li>
                <li>Tailwind</li>
                <li>AWS EC2</li>
                <li>Vercel</li>
              </ul>
              <Link href='/projects/dashboard'>
                <p className='p-1 bg-indigo-600 hover:bg-indigo-300 italic transition-all rounded-md mt-2 mx-auto text-center'>Learn More</p>
              </Link>
            </div>
          </div>
        </div>

        <div className='hidden sm:block'>
          <div className='border -mb-6 p-2 mx-auto text-center text-white w-40 relative skew-x-6 bg-black '>
            E-Commerce
          </div>
        <div className="p-8 md:p-12 border bg-white grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3 md:gap-x-4">
          <p className='text-xs md:text-sm col-span-2 mr-2 pr-2 border-double border-r-4 border-b-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
          <div className='ml-4 text-xs md:text-sm'>
            <p className='font-mono bg-slate-100 -mb-3 w-24 mx-auto text-center border'> Tech Stack </p>
            <ul class="list-inside border p-2 divide-y list-image-[url(7.svg)]">
              <li className='mt-4'>Django Rest Framework</li>
              <li>React</li>
              <li>NextJs</li>
              <li>Tailwind</li>
              <li>AWS EC2</li>
              <li>Vercel</li>
            </ul>
            <Link href='/projects/ecommerce'>
              <p className='p-1 bg-indigo-600 hover:bg-indigo-300 italic transition-all rounded-md mt-2 mx-auto text-center'>Learn More</p>
            </Link>
          </div>
        </div>
        </div>
        <div
          className="md:p-2 bg-gradient-to-tr from-sky-100 rounded-md shadow-xl"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >

          <div className='block md:hidden border -mt-6 p-2 mx-auto text-center text-white w-40 relative skew-x-6 bg-black '>
            E-Commerce
          </div>
          <p className='px-4 pt-2 hidden sm:block'> E-commerce website</p>
          <div className="hover:scale-110 md:hover:scale-125 p-4 transition-all">
            <video ref={videoRefs[1]} className="opacity-90 object-cover border" loop muted>
              <source src="/ecom.mp4" />
            </video>
          </div>
          <div className='block md:hidden'>
            <div className="p-8 md:p-12 border bg-white grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3 md:gap-x-4">
              <p className='text-xs md:text-sm col-span-2 mr-2 pr-2 border-double border-r-4 border-b-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              </p>
              <div className='ml-4 text-xs md:text-sm'>
                <p className='font-mono bg-slate-100 -mb-3 w-24 mx-auto text-center border'> Tech Stack </p>
                <ul class="list-inside border p-2 divide-y list-image-[url(7.svg)]">
                  <li className='mt-4'>Django Rest Framework</li>
                  <li>React</li>
                  <li>NextJs</li>
                  <li>Tailwind</li>
                  <li>AWS EC2</li>
                  <li>Vercel</li>
                </ul>
                <Link href='/projects/ecommerce'>
                  <p className='p-1 bg-indigo-600 hover:bg-indigo-300 italic transition-all rounded-md mt-2 mx-auto text-center'>Learn More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:p-2 bg-gradient-to-tr from-sky-100 rounded-md shadow-xl"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <div className=' block md:hidden border -mt-6 p-2 mx-auto text-center text-white w-40 relative skew-x-6 bg-black '>
            Data Visualisation
          </div>
          <p className='px-4 pt-2 hidden sm:block'> Data Visualisation</p>
          <div className="hover:scale-110 md:hover:scale-125 p-4 transition-all">
            <video ref={videoRefs[2]} className="opacity-90 object-cover border" loop muted>
              <source src="/visualization.mp4" />
            </video>
          </div>
          <div className='block md:hidden'>
            <div className="p-8 md:p-12 border bg-white grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3 md:gap-x-4">
              <p className='text-xs md:text-sm col-span-2 mr-2 pr-2 border-double border-r-4 border-b-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              </p>
              <div className='ml-4 text-xs md:text-sm'>
                <p className='font-mono bg-slate-100 -mb-3 w-24 mx-auto text-center border'> Tech Stack </p>
                <ul class="list-inside border p-2 divide-y list-image-[url(7.svg)]">
                  <li className='mt-4'>Django</li>
                  <li>Bootstrap 5</li>
                  <li>PostgreSQL</li>
                  <li>Twilio</li>
                  <li>AWS EC2</li>
                </ul>
                <Link href='/projects/custom'>
                  <p className='p-1 bg-indigo-600 hover:bg-indigo-300 italic transition-all rounded-md mt-2 mx-auto text-center'>Learn More</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden sm:block'>
          <div className='border -mb-6 p-2 mx-auto text-center text-white w-40 relative skew-x-6 bg-black '>
            Data Visualisation
          </div>
        <div className="p-8 md:p-12 border bg-white grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3 md:gap-x-4">
          <p className='text-xs md:text-sm col-span-2 mr-2 pr-2 border-double border-r-4 border-b-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
          <div className='ml-4 text-xs md:text-sm'>
            <p className='font-mono bg-slate-100 -mb-3 w-24 mx-auto text-center border'> Tech Stack </p>
            <ul class="list-inside border p-2 divide-y list-image-[url(7.svg)]">
              <li className='mt-4'>Django</li>
              <li>Bootstrap 5</li>
              <li>PostgreSQL</li>
              <li>Twilio</li>
              <li>AWS EC2</li>
            </ul>
            <Link href='/projects/custom'>
              <p className='p-1 bg-indigo-600 hover:bg-indigo-300 italic transition-all rounded-md mt-2 mx-auto text-center'>Learn More</p>
            </Link>
          </div>
        </div>
        </div>
      </div>
      <div className='p-20'>
        <Link href="/projects">
          <p className='border p-2 mx-auto text-center text-white w-32 relative skew-x-6 bg-black '>
                View All
          </p>
        </Link>
      </div>
    </div>
  );
}
