'use client';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Component } from '@/models/Common';

interface ImageContainerType extends Component {
  src: string,
  alt: string,
}

const ImageContainer = ({ src, alt, className }: ImageContainerType) => (
  <div className={cn(className)}>
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes='100vw'
      className='h-auto w-full'
      loading='lazy'
      // TODO: Add feature handle error and blur
    />
  </div>
);

export default ImageContainer;
