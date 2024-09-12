import SignOutButton from './SignOutButton';
import Logo from './Logo';
import {
  Element3,
  EmptyWallet,
  Profile2User,
  Star1,
  UserSquare,
  Verify,
  Direct,
} from 'iconsax-react';
import user from '@/public/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const navLinks = [
  {
    label: 'داشبورد',
    href: '/account/dashboard',
    icon: <Element3 className='size-5' variant='Bulk' />,
  },
  {
    label: 'لیست رزرو من',
    href: '/account/reservations',
    icon: <UserSquare className='size-5' variant='Bulk' />,
  },
  {
    label: 'بخش مالی',
    href: '/account/finance',
    icon: <EmptyWallet className='size-5' variant='Bulk' />,
  },
  {
    label: 'مدیریت تیکت ها',
    href: '/account/tickets',
    icon: <Direct className='size-5' variant='Bulk' />,
  },
  {
    label: 'باشگاه مشتریان',
    href: '/account/customersclub',
    icon: <Profile2User className='size-5' variant='Bulk' />,
  },
  {
    label: 'علاقه مندی های من',
    href: '/account/favorites',
    icon: <Star1 className='size-5' variant='Bulk' />,
  },
  {
    label: 'مسافران من',
    href: '/account/travelers',
    icon: <Verify className='size-5' variant='Bulk' />,
  },
];

export default function SideNavigation() {
  return (
    <nav className='hidden h-screen flex-col gap-y-3 overflow-scroll bg-white px-4 py-4 text-gray-800 scrollbar-none lg:flex'>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <Logo />
        <p className='font-extrabold uppercase tracking-[.25em]'>Zarvantrip</p>
      </div>
      <div className='border-b-2 border-b-neutral-800'></div>
      <ul className='flex h-full flex-col gap-2'>
        {navLinks.map((link) => (
          <li key={link.label} className='text-sm'>
            <NavLink href={link.href} icon={link.icon} label={link.label} />
          </li>
        ))}

        <li className='mt-auto flex flex-col items-center justify-center gap-y-1 text-sm font-bold'>
          <div className='flex w-full flex-col items-center justify-center gap-y-1 rounded-lg bg-neutral-100 py-2'>
            <div className='relative size-10 rounded-full'>
              <Image
                src={user}
                alt='User image'
                fill
                className='object-contain'
              />
            </div>
            <p>ابوالفضل عزیز</p>
            <p>AbyariZarvan@gmail.com</p>
          </div>
          <div className='w-full'>
            <SignOutButton />
          </div>
        </li>
      </ul>
    </nav>
  );
}
