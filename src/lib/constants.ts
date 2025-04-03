export const baseURL = import.meta.env.VITE_API_BASE_URL

export const ErrorMessages = {
  HttpErrors: {
    404: 'Resource not found. Please try again later.',
    500: 'Server error. Our team has been notified.',
    403: 'You do not have permission to access this resource.',
    default: 'An unexpected network error occurred',
  },

  StandardErrors: {
    NetworkError: 'Unable to connect. Please check your internet connection.',
    TimeoutError: 'Request timed out. Please try again.',
    default: 'An unexpected error occurred',
  },

  Generic: {
    noConnection: 'Unable to connect. Please check your internet connection.',
    unexpectedError: 'An unexpected error occurred',
    notFound: 'Resource not found',
    serverError: 'Server error occurred',
  },
} as const

export const AppRoutes = {
  recipes: { route: '/recipes', apiRoute: `${baseURL}/recipes` },
}
