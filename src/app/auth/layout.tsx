'use client';

import './auth.scss';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ImageContainer } from '@/components';
import { Component } from '@/models/Common';
import { AuthContent } from '@/utils/staticContent';

type AuthPageContentKeys = 'signin' | 'signup';

const AuthLayout = ({ children }: Component) => {
  // TODO: Refactor code
  // BUG: reload sai static content
  const [auth, setAuth] = useState(AuthContent.signin);
  const router = useRouter();
  const pathName = usePathname().replace('/auth/', '');
  useEffect(() => {
    if (pathName === '/auth') router.push('/auth/signin');
    const contentKey = pathName as AuthPageContentKeys;
    setAuth(AuthContent[contentKey]);
  }, [pathName, router]);

  return (
    <div className='center min-h-screen px-4 bg-dot-pattern md:p-0'>
      <div className='my-10 rounded-md bg-white drop-shadow-2xl md:my-16 md:flex md:w-3/4 lg:w-2/3'>
        <div className='relative hidden w-1/2 rounded-s-lg bg-cover bg-bottom bg-no-repeat object-cover md:block' style={{ backgroundImage: `url(${auth.image.src})` }}>
          <Link href='/' className='absolute left-5 top-5'>
            <ImageContainer src={auth.logo.src} alt={auth.logo.alt} />
          </Link>
        </div>
        <div className='flex w-full flex-col p-6 md:w-1/2 lg:p-8'>
          <div className='order-1 mb-2 flex items-center justify-end text-sm md:order-none md:mb-3'>
            <span className='mr-3 md:hidden'>Have an account?</span>
            <Link
              href={auth.switchAuth.href}
              className="px-2 py-1 text-blue-600 hover:text-blue-400"
            >
              {auth.switchAuth.label}
            </Link>
          </div>
          <div className='mb-8 text-center'>
            <h1 className='mb-2 text-2xl font-bold'>{auth.title}</h1>
            <p className='text-sm'>{auth.description}</p>
          </div>
          <div className='mb-5'>
            {children}
          </div>
          <div className='order-2 text-sm italic'>
            <p>{auth.footer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
