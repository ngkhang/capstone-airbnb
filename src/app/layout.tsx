import '../assets/styles/globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';

import { Component } from '@/models/Common';
import { Airbnb } from '@/utils/fontsLocal';

export const metadata: Metadata = {
  title:       'Airbnb | Nhà nghỉ dưỡng cho thuê, cabin, nhà trên bãi biển, v.v.',
  description: 'Đặt chỗ ở Airbnb cho mọi loại chuyến đi → 7 triệu chỗ ở cho thuê dành cho kỳ nghỉ → 2 triệu chỗ ở Được khách yêu thích → Hơn 220 quốc gia và vùng lãnh thổ trên toàn thế giới',
};

export default function RootLayout({ children }: Component) {
  return (
    <html lang="en">
      <link rel="shortcut icon" sizes="76x76" type="image/x-icon" href="/assets/images/favicon.ico"/>
      <body className={Airbnb.variable}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
