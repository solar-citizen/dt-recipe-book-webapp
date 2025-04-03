import { NavigatableParams } from './constants'
import { NavigableParam } from './types'

export const isNavigableParam = (param: string): param is NavigableParam =>
  NavigatableParams.includes(param as NavigableParam)

export const hasNavigableParams = (searchParams: URLSearchParams): boolean =>
  NavigatableParams.some(param => searchParams.has(param))

/**
 * Filters out navigable parameters from a URLSearchParams object
 * @param searchParams - The search parameters to filter
 * @returns A new URLSearchParams object without navigable parameters
 */
export const filterNavigableParams = (searchParams: URLSearchParams): URLSearchParams => {
  const newParams = new URLSearchParams()

  for (const [key, value] of searchParams.entries()) {
    if (!isNavigableParam(key)) {
      newParams.append(key, value)
    }
  }

  return newParams
}

/**
 * Creates a query string from search parameters, excluding navigable parameters
 * @param searchParams - The search parameters to process
 * @returns A query string without navigable parameters
 */
export const getFilteredQueryString = (searchParams: URLSearchParams): string => {
  const filteredParams = filterNavigableParams(searchParams)
  return filteredParams.toString()
}
