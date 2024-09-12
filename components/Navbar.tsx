'use client';

import {
  ArrowSquareLeft,
  Element3,
  EmptyWallet,
  LogoutCurve,
  NotificationStatus,
} from 'iconsax-react';
import Link from 'next/link';
import user from '@/public/user.png';
import Image from 'next/image';

type NavbarProps = {
  setIsOpen: (val: boolean) => void;
};

function Navbar({ setIsOpen }: NavbarProps) {
  return (
    <div className='flex items-center justify-between px-3 py-4 lg:px-6 lg:py-8'>
      <div className='flex items-center justify-between gap-2 lg:gap-3'>
        <div className='hidden items-center justify-between gap-3 rounded-lg bg-neutral-500 px-3 py-2 text-sm font-bold text-gray-200 lg:flex lg:gap-3 lg:px-4 lg:py-3'>
          <div className='relative size-8 rounded-full'>
            <Image
              src={user}
              alt='User image'
              fill
              className='object-contain'
            />
          </div>
          <span>ابوالفضل عزیز خوش آمدی</span>
          <ArrowSquareLeft variant='Bulk' className='text-neutral-900' />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className='p rounded-lg bg-off-black p-3 text-white lg:hidden'
        >
          <Element3 className='size-5' variant='Bulk' />
        </button>

        <div className='flex items-center justify-between gap-3 rounded-lg bg-neutral-500 p-3 text-xs font-bold text-gray-200 sm:text-sm lg:p-4'>
          <EmptyWallet variant='Bulk' className='text-off-black-light' />
          <span>21,265,000 تومان</span>
        </div>
      </div>

      <div className='flex items-center justify-between gap-3'>
        <Link href='/' className='rounded-lg'>
          <div className='flex items-center gap-1 rounded-lg bg-red-600 p-3 text-sm text-white lg:gap-2 lg:p-4'>
            <LogoutCurve className='size-6 text-white' variant='Bulk' />
            <span className='hidden lg:block'>بازگشت به سایت</span>
          </div>
        </Link>
        <Link href='/' className='rounded-lg'>
          <div className='rounded-lg bg-neutral-500 p-3 lg:p-4'>
            <NotificationStatus className='size-6' variant='Bulk' />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
