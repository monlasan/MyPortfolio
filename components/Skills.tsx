import React from 'react';

export default function Skills() {
  return (
    <section className=' mb-16 mt-8'>
      <h2 className='dark:text-white mb-16 md:mt-16 text-4xl font-medium font-montserratAlt '>
        Skills
      </h2>
      <div className='grid dark:text-gray-400 px-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-10 font-light'>
        <ul className='relative grid gap-2 '>
          <span className='absolute -top-5 -left-5 block w-3 h-3 bg-cyan-400  rounded-full'></span>
          <li>Html</li>
          <li>Css / Scss</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Php</li>
        </ul>
        <ul className='relative grid gap-2 '>
          <span className='absolute -top-5 -left-5 block w-3 h-3 bg-cyan-500 rounded-full'></span>
          <li>ReactJS</li>
          <li>VueJS</li>
          <li>NextJS</li>
          <li>NuxtJS</li>
          <li>TailwindCSS</li>
        </ul>
        <ul className='relative grid gap-2 '>
          <span className='absolute -top-5 -left-5 block w-3 h-3 bg-cyan-500 rounded-full'></span>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Node JS</li>
          <li>Figma</li>
          <li>Adobe XD</li>
        </ul>
        <ul className='relative grid gap-2 '>
          <span className='absolute -top-5 -left-5 block w-3 h-3 bg-cyan-500 rounded-full'></span>
          <li>Affinity Designer</li>
          <li>Adobe Photoshop</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </section>
  );
}
