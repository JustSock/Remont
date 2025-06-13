import { useState } from 'react'

const useHttpLoader = (isAlreadyLoading = false) => {
  const [loading, setLoading] = useState(isAlreadyLoading)

  const wait = <T>(p: Promise<T>, onLoad?: (v: T) => void, onError?: (err: any) => void) => {
    setLoading(true)

    return p
      .then((r) => {
        if (onLoad) onLoad(r)
        setLoading(false)
      })
      .catch((err) => {
        if (onError) onError(err)
        setLoading(false)
      })
  }

  return { loading, wait }
}

export default useHttpLoader
