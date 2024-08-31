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

export interface ApiResponse<T> {
  statusCode: number;
  content: T;
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
  redirectUrl: string,
}

export interface MiddlewareApi<T> {
  error?: ErrorResponse;
  data?: T;
}
