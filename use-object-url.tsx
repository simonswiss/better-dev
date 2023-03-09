import { useState, useEffect } from 'react'

export default function useObjectURL(data: Uint8Array | null) {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
    if (data) {
      const url = URL.createObjectURL(new Blob([data]))
      setUrl(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setUrl(null)
    }
  }, [data])
  return url
}
