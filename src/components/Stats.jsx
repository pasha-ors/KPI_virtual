import React, { useEffect, useRef, useState } from 'react'

const Stats = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 1000, suffix: '+', label: 'Študentov ročne' },
    { value: 0, target: 3, suffix: '', label: 'Stupne štúdia' },
    { value: 0, target: 20, suffix: '+', label: 'Výskumných oblastí' },
    { value: 0, target: 95, suffix: '%', label: 'Zamestnanosť absolventov' }
  ])
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60

    counters.forEach((counter, index) => {
      const increment = counter.target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= counter.target) {
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = { ...newCounters[index], value: counter.target }
            return newCounters
          })
          clearInterval(timer)
        } else {
          setCounters(prev => {
            const newCounters = [...prev]
            newCounters[index] = { ...newCounters[index], value: Math.ceil(current) }
            return newCounters
          })
        }
      }, duration / steps)
    })
  }

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {counters.map((stat, index) => (
            <div className="stat-item fade-in" key={index}>
              <div className="stat-number">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
