import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLang, setActiveLang] = useState('sk')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm)
      // Implement search logic here
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const switchLanguage = (lang) => {
    setActiveLang(lang)
    console.log('Switching to language:', lang)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="brand-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-main">Katedra počítačov a informatiky</span>
            <span className="brand-sub">Fakulta elektrotechniky a informatiky</span>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-search">
            <input
              type="text"
              placeholder="Hľadať"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="nav-language">
            <button
              className={`lang-btn ${activeLang === 'en' ? 'active' : ''}`}
              onClick={() => switchLanguage('en')}
            >
              <img src="https://flagcdn.com/w20/gb.png" alt="EN" width="16" height="12" />
            </button>
            <button
              className={`lang-btn ${activeLang === 'sk' ? 'active' : ''}`}
              onClick={() => switchLanguage('sk')}
            >
              <img src="https://flagcdn.com/w20/sk.png" alt="SK" width="16" height="12" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="main-nav">
        <div className="nav-container">
          <div className="nav-menu-horizontal" id="navMenu">
            <div className="nav-item">
              <a href="#about" className="nav-link">O NÁS</a>
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4>O Nás</h4>
                  <Link to="/historia-katedry"><i className="fas fa-arrow-right"></i> História katedry</Link>
                  <Link to="/povedali-o-nas"><i className="fas fa-arrow-right"></i> Povedali o nás</Link>
                  <Link to="/kpi-v-mediach"><i className="fas fa-arrow-right"></i> KPI v mediách</Link>
                </div>
                <div className="dropdown-section">
                  <h4>VYSKUM</h4>
                  <Link to="/projekty"><i className="fas fa-arrow-right"></i> Projekty</Link>
                  <Link to="/konferencia"><i className="fas fa-arrow-right"></i> Konferencia</Link>
                  <Link to="/informatics"><i className="fas fa-arrow-right"></i> Informatics</Link>
                </div>
                <div className="dropdown-section">
                  <h4>Ludia</h4>
                  <Link to="/vedenia-katedry"><i className="fas fa-arrow-right"></i> Vedenia katedry</Link>
                  <Link to="/zamestnanci"><i className="fas fa-arrow-right"></i> Zamestnanci</Link>
                  <Link to="/kontakt"><i className="fas fa-arrow-right"></i> Kontakt</Link>
                </div>
              </div>
            </div>

            <div className="nav-item">
              <a href="#applicants" className="nav-link">UCHÁDZAČI</a>
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4>PRIHLÁSTE SA NA ŠTÚDIUM</h4>
                  <Link to="/podmienka-prijatia"><i className="fas fa-arrow-right"></i> Podmienky prijatia</Link>
                  <Link to="/preco-studovat-informatiku"><i className="fas fa-arrow-right"></i> Prečo študovať informatiku u nás?</Link>
                  <Link to="/povedali-o-nas"><i className="fas fa-arrow-right"></i> Povedali o nás</Link>
                  <Link to="/ako-prebieha-studium"><i className="fas fa-arrow-right"></i> Ako prebieha štúdium</Link>
                </div>
                <div className="dropdown-section">
                  <h4>Študijné programy</h4>
                  <Link to="/bakalarske-programy"><i className="fas fa-arrow-right"></i> Bakalárske študijné programy</Link>
                  <Link to="/inzinierske-programy"><i className="fas fa-arrow-right"></i> Inžinierske študijné programy</Link>
                  <Link to="/doktorandsky-program"><i className="fas fa-arrow-right"></i> Doktorandský študijný program</Link>
                </div>
                <div className="dropdown-section">
                  <Link to="/ubytovanie-stravovanie"><i className="fas fa-arrow-right"></i> Ubytovanie a stravovaniey</Link>
                  <Link to="/siet-wifi"><i className="fas fa-arrow-right"></i> Sieť a WiFi</Link>
                  <Link to="/den-otv-dveri"><i className="fas fa-arrow-right"></i> Deň otvorených dverí</Link>
                  <Link to="/casopis-halo-tu"><i className="fas fa-arrow-right"></i> Časopis Haló TU</Link>
                  <Link to="/magazin-kpi"><i className="fas fa-arrow-right"></i> Magazín KPI</Link>
                </div>
              </div>
            </div>

            <div className="nav-item">
              <a href="#students" className="nav-link">ŠTUDENTI</a>
              <div className="dropdown-menu">

                <div className="dropdown-section">
                  <h4>Harmonogram štúdia</h4>
                  <Link to="/bakalarske-inzinierske-studium"><i className="fas fa-arrow-right"></i> Bakalárske a inžinierske štúdium</Link>
                  <Link to="/doktorandske-studium"><i className="fas fa-arrow-right"></i> Doktorandské štúdium</Link>
                </div>

                <div className="dropdown-section">
                  <h4>Študijné programy</h4>
                  <Link to="/bakalarske-programy"><i className="fas fa-arrow-right"></i> Bakalárske študijné programy</Link>
                  <Link to="/inzinierske-programy"><i className="fas fa-arrow-right"></i> Inžinierske študijné programy</Link>
                  <Link to="/doktorandsky-program"><i className="fas fa-arrow-right"></i> Doktorandský študijný program</Link>
                </div>

                <div className="dropdown-section">
                  <h4>Informačné systémy</h4>
                  <Link to="/moodle"><i className="fas fa-arrow-right"></i> Moodle – učebné materiály</Link>
                  <Link to="/mais"><i className="fas fa-arrow-right"></i> MAIS – známky, skúšky, rozvrhy</Link>
                  <Link to="/posta"><i className="fas fa-arrow-right"></i> Pošta</Link>
                </div>

                <div className="dropdown-section">
                  <h4>Mobility</h4>
                  <Link to="/studium-v-zahranici"><i className="fas fa-arrow-right"></i> Štúdium v zahraničí</Link>
                  <Link to="/erasmus"><i className="fas fa-arrow-right"></i> ERASMUS+</Link>
                  <Link to="/ceepus"><i className="fas fa-arrow-right"></i> CEEPUS</Link>
                </div>

                <div className="dropdown-section">
                  <Link to="/zaverecne-prace"><i className="fas fa-arrow-right"></i> ZÁVEREČNÉ PRÁCE</Link>
                  <Link to="/statne-skusky"><i className="fas fa-arrow-right"></i> ŠTÁTNE SKÚŠKY</Link>
                </div>

              </div>
            </div>  

            <div className="nav-item">
              <a href="#graduates" className="nav-link">ABSOLVENTI</a>
              <div className="dropdown-menu">

                <div className="dropdown-section">
                  <h4>Uplatnenie absolventov</h4>
                  <Link to="/bakalari-bc"><i className="fas fa-arrow-right"></i> Bakalári (Bc.)</Link>
                  <Link to="/inzinieri-ing"><i className="fas fa-arrow-right"></i> Inžinieri (Ing.)</Link>
                </div>

              </div>
              </div>

              <div className="nav-item">
                <a href="#employees" className="nav-link">ZAMESTNANCI</a>
                <div className="dropdown-menu">
                <div className="dropdown-section">
                <h4>Zamestnanci</h4>
                <Link to="/vedenie-katedry"><i className="fas fa-arrow-right"></i> Vedenie katedry</Link>
                <Link to="/clen-katedry"><i className="fas fa-arrow-right"></i> Členovia katedry</Link>
                <Link to="/telefonny-zoznam"><i className="fas fa-arrow-right"></i> Telefónny zoznam</Link>
              </div>

              <div className="dropdown-section">
                <h4>Laboratóriá</h4>
                <Link to="/laboratorne-miestnosti"><i className="fas fa-arrow-right"></i> Laboratórne miestnosti</Link>
              </div>

              <div className="dropdown-section">
                <Link to="/konferencia-informatics"><i className="fas fa-arrow-right"></i> Konferencia Informatics</Link>
                <Link to="/projekty-zamestnanci"><i className="fas fa-arrow-right"></i> PROJEKTY</Link>
              </div>
                </div>
            </div>

            <div className="nav-item">
              <a href="#partners" className="nav-link">PARTNERI</a>
              <div className="dropdown-menu">
              <div className="dropdown-section">
              <h4>S kým spolupracujeme</h4>
              <Link to="/univerzity"><i className="fas fa-arrow-right"></i> Univerzity</Link>
              <Link to="/spolocnosti"><i className="fas fa-arrow-right"></i> Spoločnosti</Link>
              <Link to="/ine"><i className="fas fa-arrow-right"></i> Iné</Link>
            </div>

            <div className="dropdown-section">
              <h4>PROJEKTY</h4>
              <Link to="/t-uni"><i className="fas fa-arrow-right"></i> T-UNI</Link>
            </div>

            <div className="dropdown-section">
              <h4>Akcie</h4>
              <Link to="/zive-it-projekty"><i className="fas fa-arrow-right"></i> Živé IT projekty</Link>
              <Link to="/beat-it"><i className="fas fa-arrow-right"></i> BEAT_IT!</Link>
              <Link to="/t-systems-hackathon"><i className="fas fa-arrow-right"></i> T-Systems Hackathon</Link>
            </div>

            <div className="dropdown-section">
              <h4>Spolupráca</h4>
              <Link to="/chcete-prist-prednasiat"><i className="fas fa-arrow-right"></i> Chcete prísť prednášať?</Link>
              <Link to="/pracovne-ponuky"><i className="fas fa-arrow-right"></i> Pracovné ponuky pre študentov</Link>
            </div>
              </div>
            </div>

            <div className="nav-item">
              <Link to="https://magazin.kpi.fei.tuke.sk" target="_blank" className="nav-link">MAGAZÍN</Link>
            </div>
          </div>
          <div className="nav-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
