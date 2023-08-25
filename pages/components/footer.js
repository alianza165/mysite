import Link from 'next/link';
import { useState, useEffect } from "react";
import Image from 'next/image';


export default function Footer() {


  return (

    <div className='border-t mx-8 pt-8 h-56 '>
      <div className='flex justify-center '>
        <Image src='https://ducaqjqbmh7lv.cloudfront.net/mysite/logo.png' width={150} height={40} />
      </div>
      <div className='flex justify-center items-center'>
        <p className='py-8 font-thin'>© 2023 Epoch Labs Inc. All rights reserved.</p>
      </div>
      <div className='flex justify-center items-center'> 
      <div className=" mx-auto grid grid-cols-2  gap-y-8 divide-x-2 divide-slate-400">
        <div className="flex items-center">
          <Link href={'/projects'} passHref>
            <p className='pr-8 font-bold text-slate-700 italic text-md'>Products</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={'/'} passHref>
            <p className='pl-8 font-bold text-slate-700 italic text-md'>Home</p>
          </Link>
        </div> 
      </div>
      </div>
    </div>
  );
}
