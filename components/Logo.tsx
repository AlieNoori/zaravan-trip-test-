import logoZarvan from '@/public/logo-zarvantrip.png';
import Image from 'next/image';

function Logo() {
  return (
    <div className='relative size-24 rounded bg-white'>
      <Image
        src={logoZarvan}
        alt='Logo Zarvantrip'
        fill
        className='object-contain'
      />
    </div>
  );
}

export default Logo;
