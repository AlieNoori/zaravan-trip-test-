'use client';

import { ArrowSquareLeft } from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      className={`flex items-center justify-between gap-4 rounded-xl px-5 py-3 font-semibold transition-colors ${pathname === href ? 'bg-off-black text-white hover:bg-off-black hover:text-white' : 'text-gray-950 hover:bg-neutral-50'}`}
      href={href}
    >
      <div className='flex items-center justify-between gap-3'>
        <span
          className={`${pathname === href ? 'bg-gray-600 text-white' : 'bg-neutral-400 text-gray-900'} flex items-center rounded-lg p-2`}
        >
          {icon}
        </span>
        <span>{label}</span>
      </div>
      <div>{pathname === href && <ArrowSquareLeft variant='Bulk' />}</div>
    </Link>
  );
}

export default NavLink;
