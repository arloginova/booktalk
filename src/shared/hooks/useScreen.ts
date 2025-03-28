import { useEffect, useState } from 'react'

export const useScreen = (): { screenWidth: number } => {
  const [screenWidth, setScreenWidth] = useState<number>(0)
  useEffect(() => {
    const handleResize = (event: any) => {
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
