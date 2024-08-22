import { FormItemProps } from 'antd';
import React from 'react';

export interface Component {
  children?: React.ReactNode,
  params?: string,
  className?: string,
}

export interface FormField {
  key: number,
  config: FormItemProps,
  field: React.ReactNode,
}
