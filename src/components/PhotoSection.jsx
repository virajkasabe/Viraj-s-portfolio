import React from 'react'
import useInView from '../hooks/useInView.jsx'

function PhotoSection({ src, alt = 'Profile photo' }) {
  const [ref, inView] = useInView()

  if (!src) return null

  return (
    <section ref={ref} id="photo" className={`section photo-section ${inView ? 'reveal' : ''}`}>
      <div className="photo-card">
        <img className="photo-img" src={src} alt={alt} />
        <p className="photo-caption">Viraj Kasabe</p>
      </div>
    </section>
  )
}

export default PhotoSection
