import { useEffect, useState } from 'react'

export const useScreen = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  useEffect(() => {
    const handleResize = (event) => {
      setScreenWidth(event.target.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { screenWidth }
}