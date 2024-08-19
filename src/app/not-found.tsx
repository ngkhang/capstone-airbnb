import { Button } from 'antd';
import { Metadata } from 'next';
import Link from 'next/link';

import { ImageContainer } from '@/components';
import { NotFoundContent } from '@/utils/staticContent';

export const metadata: Metadata = {
  title: '404 Page Not Found - Airbnb',
};

const { logo, title, subtitle, img } = NotFoundContent;

const NotFoundPage = () => (
  <div className='container'>
    {/* Logo */}
    <div className='mt-6'>
      <Link href='/' className='block '>
        <ImageContainer
          src={logo.src}
          alt={logo.alt}
          className='w-[130px]'
        />
      </Link>
    </div>
    {/* Main */}
    <div className='py-6 md:flex md:justify-between'>
      <div className="mb-6 px-3 md:m-0 md:w-2/3 lg:w-1/2 lg:px-0">
        <h1 className='mb-6 text-[120px] font-bold md:text-[145px]'>{title}</h1>
        <h2 className='mb-10 text-3xl lg:mb-10' >{subtitle}</h2>
        <Link href='/'>
          <Button className='border-gray-300 px-16 py-5 font-[#222] text-lg font-medium hover:border-[#222] hover:bg-gray-300 hover:text-inherit'>
            Back to Home
          </Button>
        </Link>
      </div>
      <div className='center px-3 md:w-1/3 lg:w-2/5 lg:px-10'>
        <ImageContainer
          src={img.src}
          alt={img.alt}
          className='w-2/3 md:w-full'
        />
      </div>
    </div>
  </div>
);

export default NotFoundPage;
