import { useEffect } from 'react'

export const useScrollEffects = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in')
    fadeInElements.forEach(el => observer.observe(el))

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('navMenu')
        if (mobileMenu && mobileMenu.style.display === 'block') {
          mobileMenu.style.display = 'none'
          document.body.style.overflow = ''
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Image error handling
    const handleImageError = (e) => {
      if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x250/e5e7eb/9ca3af?text=Obr%C3%A1zok+sa+nena%C4%8D%C3%ADtal'
      }
    }

    document.addEventListener('error', handleImageError, true)

    // Cleanup
    return () => {
      fadeInElements.forEach(el => observer.unobserve(el))
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('error', handleImageError, true)
    }
  }, [])
}
