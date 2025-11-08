import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useScrollEffects } from './hooks/useScrollEffects'

// Pages
import Home from './pages/Home'

// O NÁS
import HistoriaKatedry from './pages/onas/HistoriaKatedry'
import PovedaliONas from './pages/onas/PovdaliONas'
import KPIvMediach from './pages/onas/KPIvMediach'
import Projekty from './pages/onas/Projekty'
import Konferencia from './pages/onas/Konferencia'
import Informatics from './pages/onas/Informatics'
import VedeniaKatedry from './pages/onas/VedeniaKatedry'
import Zamestnanci from './pages/onas/Zamestnanci'
import Kontakt from './pages/onas/Kontakt'

// UCHÁDZAČI
import PodmienkaPrijatia from './pages/uchadzaci/PodmienkaPrijatia'
import PrecostudovatInformatiku from './pages/uchadzaci/PrecostudovatInformatiku'
import AkoPrebiehaStudium from './pages/uchadzaci/AkoPrebiehaStudium'
import BakalarskeProgramy from './pages/uchadzaci/BakalarskeProgramy'
import InzinierskeProgramy from './pages/uchadzaci/InzinierskeProgramy'
import DoktorandskyProgram from './pages/uchadzaci/DoktorandskyProgram'
import UbytovanieStravovanie from './pages/uchadzaci/UbytovanieStravovanie'
import SietWiFi from './pages/uchadzaci/SietWiFi'
import DenOtvDveri from './pages/uchadzaci/DenOtvDveri'
import CasopisHaloTU from './pages/uchadzaci/CasopisHaloTU'
import MagazinKPI from './pages/uchadzaci/MagazinKPI'

// ŠTUDENTI
import BakalarskeInzinierskeStudium from './pages/studenti/BakalarskeInzinierskeStudium'
import DoktorandskeStudium from './pages/studenti/DoktorandskeStudium'
import Moodle from './pages/studenti/Moodle'
import MAIS from './pages/studenti/MAIS'
import Posta from './pages/studenti/Posta'
import StudiumvZahranici from './pages/studenti/StudiumvZahranici'
import Erasmus from './pages/studenti/Erasmus'
import Ceepus from './pages/studenti/Ceepus'
import ZaverecnePrace from './pages/studenti/ZaverecnePrace'
import StatneSkusky from './pages/studenti/StatneSkusky'

// ABSOLVENTI
import BakalariBC from './pages/absolventi/BakalariBC'
import InzinieriING from './pages/absolventi/InzinieriING'

// ZAMESTNANCI
import VedenieKatedry from './pages/zamestnanci/VedenieKatedry'
import ClenKatedry from './pages/zamestnanci/ClenKatedry'
import TelefonnyZoznam from './pages/zamestnanci/TelefonnyZoznam'
import LaboratorneMiestnosti from './pages/zamestnanci/LaboratorneMiestnosti'
import KonferenciaInformatics from './pages/zamestnanci/KonferenciaInformatics'
import ProjektyZamestnanci from './pages/zamestnanci/ProjektyZamestnanci'

// PARTNERI
import Univerzity from './pages/partneri/Univerzity'
import Spolocnosti from './pages/partneri/Spolocnosti'
import Ine from './pages/partneri/Ine'
import TUNI from './pages/partneri/TUNI'
import ZiveITProjekty from './pages/partneri/ZiveITProjekty'
import BeatIT from './pages/partneri/BeatIT'
import TSystemsHackathon from './pages/partneri/TSystemsHackathon'
import ChcetePristPrednasiat from './pages/partneri/ChcetePristPrednasiat'
import PracovnePonuky from './pages/partneri/PracovnePonuky'

function App() {
  useScrollEffects()

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* O NÁS */}
          <Route path="/historia-katedry" element={<HistoriaKatedry />} />
          <Route path="/povedali-o-nas" element={<PovedaliONas />} />
          <Route path="/kpi-v-mediach" element={<KPIvMediach />} />
          <Route path="/projekty" element={<Projekty />} />
          <Route path="/konferencia" element={<Konferencia />} />
          <Route path="/informatics" element={<Informatics />} />
          <Route path="/vedenia-katedry" element={<VedeniaKatedry />} />
          <Route path="/zamestnanci" element={<Zamestnanci />} />
          <Route path="/kontakt" element={<Kontakt />} />

          {/* UCHÁDZAČI */}
          <Route path="/podmienka-prijatia" element={<PodmienkaPrijatia />} />
          <Route path="/preco-studovat-informatiku" element={<PrecostudovatInformatiku />} />
          <Route path="/ako-prebieha-studium" element={<AkoPrebiehaStudium />} />
          <Route path="/bakalarske-programy" element={<BakalarskeProgramy />} />
          <Route path="/inzinierske-programy" element={<InzinierskeProgramy />} />
          <Route path="/doktorandsky-program" element={<DoktorandskyProgram />} />
          <Route path="/ubytovanie-stravovanie" element={<UbytovanieStravovanie />} />
          <Route path="/siet-wifi" element={<SietWiFi />} />
          <Route path="/den-otv-dveri" element={<DenOtvDveri />} />
          <Route path="/casopis-halo-tu" element={<CasopisHaloTU />} />
          <Route path="/magazin-kpi" element={<MagazinKPI />} />

          {/* ŠTUDENTI */}
          <Route path="/bakalarske-inzinierske-studium" element={<BakalarskeInzinierskeStudium />} />
          <Route path="/doktorandske-studium" element={<DoktorandskeStudium />} />
          <Route path="/moodle" element={<Moodle />} />
          <Route path="/mais" element={<MAIS />} />
          <Route path="/posta" element={<Posta />} />
          <Route path="/studium-v-zahranici" element={<StudiumvZahranici />} />
          <Route path="/erasmus" element={<Erasmus />} />
          <Route path="/ceepus" element={<Ceepus />} />
          <Route path="/zaverecne-prace" element={<ZaverecnePrace />} />
          <Route path="/statne-skusky" element={<StatneSkusky />} />

          {/* ABSOLVENTI */}
          <Route path="/bakalari-bc" element={<BakalariBC />} />
          <Route path="/inzinieri-ing" element={<InzinieriING />} />

          {/* ZAMESTNANCI */}
          <Route path="/vedenie-katedry" element={<VedenieKatedry />} />
          <Route path="/clen-katedry" element={<ClenKatedry />} />
          <Route path="/telefonny-zoznam" element={<TelefonnyZoznam />} />
          <Route path="/laboratorne-miestnosti" element={<LaboratorneMiestnosti />} />
          <Route path="/konferencia-informatics" element={<KonferenciaInformatics />} />
          <Route path="/projekty-zamestnanci" element={<ProjektyZamestnanci />} />

          {/* PARTNERI */}
          <Route path="/univerzity" element={<Univerzity />} />
          <Route path="/spolocnosti" element={<Spolocnosti />} />
          <Route path="/ine" element={<Ine />} />
          <Route path="/t-uni" element={<TUNI />} />
          <Route path="/zive-it-projekty" element={<ZiveITProjekty />} />
          <Route path="/beat-it" element={<BeatIT />} />
          <Route path="/t-systems-hackathon" element={<TSystemsHackathon />} />
          <Route path="/chcete-prist-prednasiat" element={<ChcetePristPrednasiat />} />
          <Route path="/pracovne-ponuky" element={<PracovnePonuky />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
