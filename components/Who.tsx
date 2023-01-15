import React from 'react';
import SannyKhaled from '@/assets/images/khaled_sanny.jpg';
import Image from 'next/image';

export default function Who() {
  return (
    <div className='mt-8'>
      <h1 className='font-medium font-montserratAlt text-5xl '>Khaled Sanny</h1>
      <p className='text-sm mt-2 font-light text-gray-500'>
        Software Engineering Intern at{' '}
        <span className='font-medium '>Urban Technology</span>
      </p>
      <div className='flex items-center mt-4 font-light dark:text-gray-300'>
        <div className='mt-8 sm:mr-8 sm:mt-0'>
          <p>
            <span className='text-xl text-cyan-500 font-mono'>HI,</span> 👋🏾
            everyone, my name is Khaled Sanny, nice to have you here.
          </p>
          <p className='mt-4'>
            <Image
              alt='Sanny Khaled - FullStack Web Developer'
              src={SannyKhaled}
              width={50}
              height={100}
              className='rounded-xl mr-4 sm:hidden object-cover float-left'
            />
            I have been studying web development and UI/UX Design since October
            2019. I love creative works and developing awesome websites. I
            currently specialize in React, Next.JS and Typescript.
          </p>
        </div>
        <Image
          alt='Sanny Khaled - FullStack Web Developer'
          src={SannyKhaled}
          width={150}
          height={150}
          className='rounded-3xl hidden sm:block object-cover'
        />
      </div>
    </div>
  );
}
