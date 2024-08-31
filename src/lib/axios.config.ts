/* eslint-disable no-console */
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { ApiResponse, ErrorResponse } from '@/models/Common';
import { API, ERROR_MESSAGES, ERROR_ROUTES, HTTP_STATUS, tokenCybersoftKey } from '@/utils/constants';

type HttpStatusCode = typeof HTTP_STATUS[keyof typeof HTTP_STATUS];

/**
* Instance Axios
*
* @link https://axios-http.com/docs/instance
*/
const axiosClient: AxiosInstance = axios.create({
  baseURL: API.DOMAIN,
  timeout: 5 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig):InternalAxiosRequestConfig => {
    if (config.headers) {
      config.headers.set(tokenCybersoftKey, API.TOKEN_CYBERSOFT);
      // config.headers['Authorization'] = accessToken ? `${accessToken}` : '';

      // Uncomment and modify the following line if you need to set the Authorization header
    // config.headers['Authorization'] = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>): AxiosResponse<ApiResponse> => response,
  (error: AxiosError): Promise<ErrorResponse> => {
    let message = 'An unexpected error occurred';
    let statusCode: HttpStatusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    let redirectUrl = '';

    if (error.response) {
      statusCode = error.response.status as HttpStatusCode;
      message = ERROR_MESSAGES[statusCode] || 'Unknown error';
      console.error(`Error ${statusCode}: ${message}`);

      // NOTE: Redirecting here might cause issues in certain contexts.
      // Consider handling navigation in the component instead.
      // if (ERROR_ROUTES[statusCode]) {
      //   redirect(ERROR_ROUTES[statusCode]);
      // }
      if (ERROR_ROUTES[statusCode]) {
        redirectUrl = ERROR_ROUTES[statusCode];
      }
    } else if (error.request) {
      // Request đã được gửi nhưng không nhận được phản hồi từ server
      message = 'No response received from server';
      console.error(message);
    }
    else {
      // Một số lỗi khác xảy ra trong quá trình thiết lập request
      message = `Error setting up request: ${error.message}`;
      console.error(message);
    }
    return Promise.reject({
      message,
      statusCode,
      redirectUrl,
    });
  }
);

export default axiosClient;
