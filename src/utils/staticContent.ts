/**
 * Static content of Auth page
 */
export const AuthContent = {
  signin: {
    title: 'Welcome back!',
    description: '',
    logo: {
      src: '/assets/images/airbnb.svg',
      alt: 'logo airbnb',
    },
    image: {
      src: '/assets/images/auth-page.png',
      alt: 'banner of sign in',
    },
    switchAuth: {
      href: '/auth/signup',
      label: 'Sign Up',
    },
    footer: 'By joining, you agree to the Airbnb Terms of Service and to occasionally receive emails from us.',
  },
  signup: {
    title: 'Create a new account',
    description: 'Enter your email below to create your account',
    logo: {
      src: '/assets/images/airbnb.svg',
      alt: 'logo airbnb',
    },
    image: {
      src: '/assets/images/auth-page.png',
      alt: 'banner of sign in',
    },
    switchAuth: {
      href: '/auth/signin',
      label: 'Sign In',
    },
    footer: 'By joining, you agree to the Airbnb Terms of Service and to occasionally receive emails from us.',
  },
};

/**
 * Static content of Not Found Page
 */
export const NotFoundContent = {
  logo: {
    src: '/assets/images/airbnb-black.svg',
    alt: 'Airbnb logo',
  },
  title:    'Oops!',
  subtitle: "We can't seem to find the page you're looking for.",
  img:  {
    src: '/assets/images/404.gif',
    alt: 'Girl has dropped her ice cream.',
  },
};
