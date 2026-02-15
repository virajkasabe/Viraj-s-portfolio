import { useEffect, useRef, useState } from 'react'

export default function useInView(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.unobserve(el)
      }
    }, options)

    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, options])

  return [ref, inView]
}
