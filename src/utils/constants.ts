export const accessTokenKey = 'accessToken';
export const tokenCybersoftKey = 'tokenCybersoft';

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_MESSAGES = {
  [HTTP_STATUS.UNAUTHORIZED]: 'Unauthorized access - perhaps the user is not logged in or token expired.',
  [HTTP_STATUS.FORBIDDEN]: "Forbidden - you don't have permission to access this resource.",
  [HTTP_STATUS.NOT_FOUND]: 'Resource not found.',
  [HTTP_STATUS.INTERNAL_SERVER_ERROR]: 'Internal server error.',
} as const;

export const ERROR_ROUTES = {
  [HTTP_STATUS.UNAUTHORIZED]: '/auth/signin',
  [HTTP_STATUS.FORBIDDEN]: '/auth/signin',
  [HTTP_STATUS.NOT_FOUND]: '/not-found',
  [HTTP_STATUS.INTERNAL_SERVER_ERROR]: '/not-found',
} as const;

export const API = {
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN_CYBERSOFT,
  TOKEN_CYBERSOFT: process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT,
} as const;


export const API_ENDPOINTS = {
  AUTH: {
    SIGN_UP: '/auth/signup',
    SIGN_IN: '/auth/signin',
  },
  BOOKINGS: {
    GET_ALL: '/dat-phong',
  },
} as const;

// export type ApiEndpoints = typeof API_ENDPOINTS;
