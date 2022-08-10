import { useState, useEffect } from 'react'

/**
 * a react hook that allows you to fetch data
 * @param {string} url a string that should contain an URL.
 * @return {(isLoading:boolean, data:object, error:boolean|object)} 
    returns a boolean indicating if the data loading is completed or not, 
    a boolean indicating whether an error occurred during the fetching 
    and an object that contain the data.
 *
 */

export function useFetch(url) {
  const [data, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setError(true)
        }

        const data = await response.json()

        setData(data.data)
      } catch (err) {
        console.log(err)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, data, error }
}
