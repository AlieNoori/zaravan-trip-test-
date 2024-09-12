import PrizeList from '@/components/PrizeList';
import { Star } from 'iconsax-react';
import Link from 'next/link';

type Props = {
  searchParams: { prize: string };
};

function page({ searchParams }: Props) {
  return (
    <main className='flex h-full w-full flex-col gap-2 overflow-hidden px-3 py-4 lg:px-6 lg:py-4'>
      <div className='flex w-full flex-col gap-2 md:hidden'>
        <div className='flex w-full justify-between gap-2'>
          <div className='rounded-lg bg-off-black p-2'>
            <Star variant='Bulk' className='size-9 text-white' />
          </div>
          <div className='flex flex-1 items-center justify-between rounded-lg bg-gray-400'>
            <Link
              href='/account/customersclub?prize=hotel'
              className={`flex h-full flex-1 items-center justify-center text-nowrap px-8 text-sm text-white ${searchParams.prize === 'hotel' && 'rounded-lg bg-off-black'}`}
            >
              جوایز هتل
            </Link>
            <Link
              href='/account/customersclub?prize=shopcenter'
              className={`flex h-full flex-1 items-center justify-center text-nowrap px-8 text-sm text-white ${searchParams.prize === 'shopcenter' && 'rounded-lg bg-off-black'}`}
            >
              جوایز مرکز خرید
            </Link>
          </div>
        </div>
        <div className='space-y-1 rounded-lg bg-off-black px-4 py-5'>
          <h2 className='text-sm font-bold text-white'>
            جمع کل امتیازات :‌1053 امتیاز
          </h2>
          <p className='text-xs text-neutral-900'>
            کاربر گرامی در این قسمت امتیازاتی که به شما تعلق میگیرد لیست میشود.
          </p>
        </div>
      </div>

      <div className='hidden w-full items-center justify-between rounded-lg bg-off-black p-5 md:flex'>
        <div className='flex items-center justify-between gap-5'>
          <div>
            <Star variant='Bulk' className='size-12 text-white' />
          </div>
          <div className='space-y-2'>
            <h2 className='text-sm font-bold text-white'>
              جمع کل امتیازات :‌1053 امتیاز
            </h2>
            <p className='text-xs text-neutral-800'>
              کاربر گرامی در این قسمت امتیازاتی که به شما تعلق میگیرد لیست
              میشود.
            </p>
          </div>
        </div>
        <div className='flex w-1/4 items-center justify-between rounded-lg bg-gray-400 lg:w-1/3'>
          <Link
            href='/account/customersclub?prize=hotel'
            className={`flex h-full flex-1 items-center justify-center text-nowrap px-4 py-3 text-sm text-white ${searchParams.prize === 'hotel' && 'rounded-lg bg-white text-black'}`}
          >
            جوایز هتل
          </Link>
          <Link
            href='/account/customersclub?prize=shopcenter'
            className={`flex h-full flex-1 items-center justify-center text-nowrap px-4 py-3 text-sm text-white ${searchParams.prize === 'shopcenter' && 'rounded-lg bg-white text-black'}`}
          >
            جوایز مرکز خرید
          </Link>
        </div>
      </div>

      <PrizeList />
    </main>
  );
}

export default page;
