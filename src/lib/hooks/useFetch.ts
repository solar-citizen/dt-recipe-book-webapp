import { DependencyList, useEffect, useState, useTransition } from 'react'

import { handleApiError } from '@/src/lib'

export const useFetch = <T>(fetchFn: () => Promise<T>, dependencies: DependencyList = []) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    setError('')

    startTransition(async () => {
      try {
        const result = await fetchFn()
        setData(result)
      } catch (err) {
        setError(handleApiError(err))
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFn, ...dependencies])

  return { data, error, isLoading: isPending && !data, setData }
}
