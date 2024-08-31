import { AxiosResponse } from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ErrorResponse, MiddlewareApi } from '@/models/Common';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function middlewareApi<T>(apiFunc: () => Promise<AxiosResponse>):Promise<MiddlewareApi<T>> {
  try {
    const response = await apiFunc();
    response.data.content;
    return {
      data: response.data.content,
    };
  } catch (error) {
    return {
      error: error as ErrorResponse,
    };
  }
}
