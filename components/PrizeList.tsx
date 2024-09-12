import Image from 'next/image';
import sampleLogo from '@/public/logo-sample.png';
import { DocumentCopy } from 'iconsax-react';

const prizes = [
  {
    label: 'خرید از فروشگاه زنجیره ی رفاه',
    code: 'FGA6799AGK',
    price: 550000,
    point: 70,
    expire: '1403/02/11',
    status: 'فعال میباشد',
  },
  {
    label: 'خرید دو بلیت سینما - (هدیش مال)',
    code: 'FGA6799AGK',
    price: 550000,
    point: 70,
    expire: '1403/02/11',
    status: 'فعال میباشد',
  },
  {
    label: 'خرید فرش - (آذرخشکده اسپیناس پالاس)',
    code: 'FGA6799AGK',
    price: 550000,
    point: 70,
    expire: '1403/02/11',
    status: 'فعال میباشد',
  },
  {
    label: 'خرید لوازم اسپرت ورزشی شرافیت - (مرکز خرید اپال)',
    code: 'FGA6799AGK',
    price: 550000,
    point: 70,
    expire: '1403/02/11',
    status: 'استفاده شده',
  },
];

function PrizeList() {
  return (
    <ul className='flex h-full w-full flex-col gap-2 overflow-y-scroll'>
      {prizes.map((prize) => (
        <li
          className='flex w-full flex-col gap-2 rounded-xl bg-white px-3 py-4 lg:flex-1 lg:flex-row lg:justify-between lg:gap-5'
          key={prize.label}
        >
          <div className='hidden rounded-lg bg-off-black p-3 lg:block'>
            <Image src={sampleLogo} alt='sample-logo' className='size-20' />
          </div>

          <div className='flex flex-col gap-2 lg:flex-1 lg:justify-between'>
            <div className='flex items-center justify-between gap-2'>
              <div className='rounded-lg bg-off-black p-3 lg:hidden'>
                <Image src={sampleLogo} alt='sample-logo' className='size-8' />
              </div>
              <div className='flex flex-1 items-center justify-center rounded-lg bg-neutral-300 p-4'>
                <p className='text-nowrap text-off-black'>{prize.label}</p>
              </div>
            </div>

            <div className='flex items-center justify-between rounded-lg bg-gray-400'>
              <div className='flex flex-1 items-center justify-center rounded-r-lg p-4'>
                <p className='text-nowrap text-sm text-white'>
                  کد تخفیف خرید :
                </p>
              </div>
              <div className='flex flex-1 items-center justify-center rounded-lg bg-off-black p-4'>
                <p className='flex items-center justify-center gap-1 text-nowrap text-sm text-white'>
                  <span>{prize.code}</span>
                  <DocumentCopy variant='Bulk' className='size-6' />
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2 lg:flex-1 lg:justify-between'>
            <div className='flex items-center justify-between rounded-lg bg-gray-400'>
              <div className='flex flex-1 items-center justify-center rounded-r-lg p-4 lg:flex-initial'>
                <p className='text-nowrap text-sm text-white'>مبلغ تخفیف : </p>
              </div>
              <div className='flex flex-1 items-center justify-center rounded-lg bg-off-black p-4'>
                <p className='text-nowrap text-sm text-white'>
                  {prize.price} تومان
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between rounded-lg bg-gray-400'>
              <div className='flex flex-1 items-center justify-center rounded-r-lg p-4'>
                <p className='text-nowrap text-sm text-white'>
                  امتیاز مورد نیاز :{' '}
                </p>
              </div>
              <div className='flex flex-1 items-center justify-center rounded-lg bg-off-black p-4 lg:flex-initial'>
                <p className='text-nowrap text-sm text-white'>
                  {prize.point} امتیاز
                </p>
              </div>
            </div>
          </div>

          <div className='flex items-baseline justify-between py-1 lg:flex-col lg:items-baseline lg:py-2'>
            <p className='items-end text-sm font-bold text-off-black'>
              اعتبار کد : {prize.expire}
            </p>
            <span
              className={`${prize.status === 'استفاده شده' ? 'bg-orange-500' : 'bg-green-500'} rounded-lg px-4 py-2 text-sm font-medium text-white`}
            >
              {prize.status}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PrizeList;
