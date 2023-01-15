import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface Props {
  to: string;
  text: string;
}

export default function NavLink({ to, text }: Props) {
  const router = useRouter();
  // router.pathname.split('/')[1] === to ||
  return (
    <li className='relative group'>
      <span
        className={clsx(
          'absolute group-hover:scale-100 left-1/2 -bottom-1 -translate-x-1/2 scale-0  transition-transform w-3 h-[2px] bg-black dark:bg-white  rounded-full',
          {
            'scale-100': router.pathname === '/' + to || router.pathname === to,
          }
        )}
      ></span>
      <Link
        href={to}
        className={clsx('text-gray-500', {
          'dark:!text-white !text-black':
            router.pathname === '/' + to || router.pathname === to,
        })}
      >
        {text}
      </Link>
    </li>
  );
}
