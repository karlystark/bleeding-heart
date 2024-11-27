import React from 'react';
import Image from 'next/image';

export default function HoverCard({width, height}) {
  return (
    <>
      <div className={`${width} ${height} relative mt-4 overflow-hidden group mx-auto dark:bg-black
      bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col`}>
        <div className='w-full h-full '>
          <Image
            src={
              '/bleedingheart3.png'
            }
            alt='shoes'
            width={600}
            height={600}
            className='h-full w-full  scale-105 group-hover:scale-100 object-cover transition-all
            duration-300 rounded-md'
          />
        </div>
        <article className='p-8 w-full h-full overflow-hidden z-10  absolute top-0 flex flex-col
        justify-end rounded-md   bg-[#68248c]  opacity-0 group-hover:opacity-100  transition-all
        duration-300'>
          <div className='translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2'>
            <h1 className='md:text-2xl font-semibold'>Who We are</h1>
            <p className='sm:text-base text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              consectetur ducimus vel nemo deserunt possimus inventore ipsum
              nostrum. Sapiente, facilis?
            </p>
            <button className='p-2 bg-white flex rounded-md text-black'>
              Learn More
            </button>
          </div>
        </article>
        <article className='p-2 w-full h-[20%] flex flex-col justify-end  overflow-hidden
        absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#68248c]  opacity-100
        group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300'>
          <h1 className='md:text-2xl font-semibold'>Bleeding Heart Pigeon</h1>
          <p className='sm:text-base text-sm'>so beautiful</p>
        </article>
      </div>
    </>
  );
}

