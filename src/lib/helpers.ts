import { AxiosError } from 'axios'

import { ErrorMessages } from './constants'

const { Generic, HttpErrors, StandardErrors } = ErrorMessages

const isAxiosError = (err: unknown): err is AxiosError => {
  return err instanceof Error && 'isAxiosError' in err && (err as AxiosError).isAxiosError
}

const handleAxiosResponseError = (err: AxiosError): string => {
  if (err.response) {
    const status = err.response.status as keyof typeof HttpErrors
    return HttpErrors[status]
  }

  if (err.request) return Generic.noConnection

  return Generic.unexpectedError
}

const handleStandardError = (err: Error): string => {
  const errorName = err.name as keyof typeof StandardErrors
  return StandardErrors[errorName]
}

export const handleApiError = (err: unknown): string => {
  if (isAxiosError(err)) return handleAxiosResponseError(err)

  if (err instanceof Error) return handleStandardError(err)

  if (typeof err === 'string') return err

  return Generic.unexpectedError
}
