import { useState, useEffect } from "react"

export const useClock = () => {
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  })

  return time
}
