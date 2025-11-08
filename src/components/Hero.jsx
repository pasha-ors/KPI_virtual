import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Katedra počítačov</h1>
            <h2>a informatiky</h2>
            <p className="hero-description">
              Najväčšia katedra v oblasti informatiky a informačných technológií
              na východnom Slovensku. Pripravujeme odborníkov pre budúcnosť IT.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary ripple" onClick={() => scrollToSection('education')}>
                Študijné programy
              </button>
              <button className="btn-secondary ripple">Virtuálna prehliadka</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="kpi-giant-text">
              <span className="kpi-letter" data-letter="K">K</span>
              <span className="kpi-letter" data-letter="P">P</span>
              <span className="kpi-letter" data-letter="I">I</span>
            </div>
            <div className="kpi-floating-elements">
              <div className="floating-icon" style={{ top: '5%', left: '2%' }}>
                <i className="fas fa-code"></i>
              </div>
              <div className="floating-icon" style={{ top: '12%', right: '3%' }}>
                <i className="fas fa-laptop"></i>
              </div>
              <div className="floating-icon" style={{ bottom: '12%', left: '3%' }}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="floating-icon" style={{ bottom: '5%', right: '2%' }}>
                <i className="fas fa-network-wired"></i>
              </div>

              {/* Enhanced floating dots positioned to not interfere with KPI */}
              <div className="floating-dot small" style={{ top: '40%', left: '8%', animationDelay: '2s' }}></div>
              <div className="floating-dot medium" style={{ top: '70%', right: '12%', animationDelay: '5s' }}></div>
              <div className="floating-dot large" style={{ top: '50%', left: '92%', animationDelay: '8s' }}></div>
              <div className="floating-dot small" style={{ bottom: '55%', left: '18%', animationDelay: '11s' }}></div>
              <div className="floating-dot medium" style={{ top: '8%', right: '25%', animationDelay: '14s' }}></div>

              {/* New geometric shapes positioned away from center */}
              <div className="floating-triangle" style={{ top: '25%', right: '85%', animationDelay: '3s' }}></div>
              <div className="floating-triangle" style={{ bottom: '40%', left: '88%', animationDelay: '7s' }}></div>
              <div className="floating-square" style={{ width: '18px', height: '18px', top: '60%', right: '8%', animationDelay: '4s' }}></div>
              <div className="floating-square" style={{ width: '12px', height: '12px', bottom: '35%', right: '90%', animationDelay: '9s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
