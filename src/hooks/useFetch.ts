import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const getStaticProps = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()
        setData(data)
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted')
        }
      }
    }
    getStaticProps()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data }
}
