'use client';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import { useState } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-screen w-full grid-cols-[17rem_1fr] overflow-hidden bg-neutral-200 lg:grid'>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='flex w-full flex-col overflow-scroll py-1 scrollbar-none'>
        <Navbar setIsOpen={setIsOpen} />
        {children}
      </div>
    </div>
  );
}
