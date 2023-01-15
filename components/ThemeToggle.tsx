//ThemeToggle.js
import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '@/store/ThemeContext';
import { useLoaded } from '@/hooks/useLoaded';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const loaded = useLoaded();

  return (
    <button className='relative isolate group transition duration-500 ease-in-out rounded-full p-2'>
      <div className='absolute -z-10 group-hover:scale-75 p-2 scale-50   transition-transform ease-out duration-150 inset-0 rounded-lg  bg-zinc-50 dark:bg-zinc-700'></div>

      {theme === 'dark' && loaded ? (
        <FiSun
          onClick={() =>
            setTheme(theme === 'dark' && loaded ? 'light' : 'dark')
          }
          size={35}
          className='text-zinc-800 dark:text-white text-2xl p-2 rounded-md bg-zinc-50 dark:bg-zinc-700 cursor-pointer'
        />
      ) : (
        <FiMoon
          onClick={() =>
            setTheme(theme === 'dark' && loaded ? 'light' : 'dark')
          }
          size={35}
          className='text-zinc-800 dark:text-white text-2xl p-2 rounded-md bg-zinc-50 dark:bg-zinc-700 cursor-pointer'
        />
      )}
    </button>
  );
};

export default Toggle;
