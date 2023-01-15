import ThemeToggle from '@/components/ThemeToggle';
import NavLink from '@/components/NavLink';

export default function Navbar() {
  return (
    <header className='container max-w-4xl mx-auto px-8'>
      <div className='w-full h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-green-600'></div>

      <nav className='flex justify-between items-center'>
        <ul className='flex items-center gap-6 py-9'>
          <NavLink to='/' text='Home' />
          <NavLink to='/blog' text='Blog' />
          {/* <NavLink to='/projects' text='Projects' /> */}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
