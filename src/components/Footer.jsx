import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-text">
                <span className="brand-main">KPI Virtual</span>
                <span className="brand-sub">Technická univerzita v Košiciach</span>
              </div>
            </div>
            <p>Moderné vzdelávanie v oblasti sieťových technológií a informatiky pre budúcnosť digitálnej spoločnosti.</p>
          </div>

          <div className="footer-section">
            <h4>Štúdium</h4>
            <ul>
              <li><a href="#education">Bakalárske štúdium</a></li>
              <li><a href="#education">Magisterské štúdium</a></li>
              <li><a href="#education">Doktorandské štúdium</a></li>
              <li><a href="#careers">Kariérne možnosti</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Výskum</h4>
            <ul>
              <li><a href="#research">Výskumné oblasti</a></li>
              <li><a href="#research">Laboratóriá</a></li>
              <li><a href="#research">Publikácie</a></li>
              <li><a href="#research">Projekty</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Sledujte nás</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Katedra počítačov a informatiky, TUKE. Všetky práva vyhradené.</p>
          <div className="footer-links">
            <a href="#">Ochrana osobných údajov</a>
            <a href="#">Podmienky používania</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
