import React from 'react';
import { FiGithub, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import NavLink from './NavLink';

export default function Footer() {
  let actualYear = new Date().getFullYear();
  return (
    <footer className='flex justify-between items-center gap-y-10 flex-col sm:flex-row mt-16 border-t border-zinc-200 dark:border-white/10 py-8'>
      <small className='text-sm text-gray-500'>
        <span className='text-black dark:text-gray-200'>Khaled Sanny</span>{' '}
        &copy; {actualYear}
      </small>

      <ul className='flex items-center gap-4 text-sm'>
        <NavLink to='/' text='/home' />
        <NavLink to='blog' text='/blog' />
        {/* <NavLink to='projects' text='/projects' /> */}
      </ul>

      <ul className='flex items-center dark:text-zinc-100 text-zinc-700 gap-1'>
        <a href='https://github.com/monlasan' target='_blank' rel='noopener'>
          <li className='hover:bg-zinc-100 transition-colors hover:dark:bg-zinc-800 p-2 rounded-full'>
            <FiGithub size={20} />
          </li>
        </a>
        <a href='https://t.me/khaled_sama' target='_blank' rel='noopener'>
          <li className='hover:bg-zinc-100 transition-colors hover:dark:bg-zinc-800 p-2 rounded-full'>
            <FaTelegramPlane size={20} />
          </li>
        </a>
        <a href='khaledsannyaml@gmail.com' target='_blank' rel='noopener'>
          <li className='hover:bg-zinc-100 transition-colors hover:dark:bg-zinc-800 p-2 rounded-full'>
            <FiMail size={20} />
          </li>
        </a>
      </ul>
    </footer>
  );
}
