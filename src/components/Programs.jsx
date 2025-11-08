import React from 'react'

const Programs = () => {
  const informaticsPrograms = [
    {
      level: 'Bakalárske štúdium',
      title: 'Informatika',
      duration: '3 roky (slovensky/anglicky)',
      features: [
        'Matematické základy informatiky',
        'Algoritmy a dátové štruktúry',
        'Programovanie a softvérové inžinierstvo',
        'Počítačové siete a databázy'
      ],
      buttonText: 'Viac informácií',
      featured: false
    },
    {
      level: 'Magisterské štúdium',
      title: 'Informatika',
      duration: '2 roky',
      features: [
        'Softvérové inžinierstvo',
        'Počítačové siete a bezpečnosť',
        'Používateľské rozhrania',
        'Spracovanie dát a AI'
      ],
      buttonText: 'Viac informácií',
      featured: false
    }
  ]

  const cybersecurityPrograms = [
    {
      level: 'Bakalárske štúdium',
      title: 'Kyberbezpečnosť',
      duration: '3 roky (slovensky)',
      features: [
        'Základy kyberbezpečnosti',
        'Kryptografia a protokoly',
        'Priemyselná bezpečnosť',
        'CCNA Security certifikácia'
      ],
      buttonText: 'Prihlásiť sa',
      featured: true
    },
    {
      level: 'Magisterské štúdium',
      title: 'Kyberbezpečnosť',
      duration: '2 roky (pripravuje sa)',
      features: [
        'Pokročilá kryptografia',
        'Bezpečnosť sietí',
        'Digitálna forenzika',
        'Etické hackujúce'
      ],
      buttonText: 'Pripravuje sa',
      featured: false
    }
  ]

  const ProgramCard = ({ program }) => (
    <div className={`program-card ${program.featured ? 'featured' : ''} fade-in`}>
      <div className="program-level">{program.level}</div>
      <h4>{program.title}</h4>
      <div className="program-duration">{program.duration}</div>
      <ul className="program-features">
        {program.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={program.featured ? 'btn-primary' : 'btn-outline'}>
        {program.buttonText}
      </button>
    </div>
  )

  return (
    <section className="programs" id="education">
      <div className="container">
        <div className="section-header">
          <h2>Študijné programy</h2>
          <p>Dva hlavné smery štúdia s rôznymi stupňami vzdelania</p>
        </div>

        {/* Informatika Section */}
        <div className="program-section">
          <div className="program-section-header">
            <h3>
              <i className="fas fa-laptop-code"></i> Informatika
            </h3>
            <p>Komplexné vzdelanie v oblasti softvérového inžinierstva, databázových systémov a počítačových sietí</p>
          </div>

          <div className="programs-grid">
            {informaticsPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        {/* Kyberbezpečnosť Section */}
        <div className="program-section">
          <div className="program-section-header">
            <h3>
              <i className="fas fa-shield-alt"></i> Kyberbezpečnosť
            </h3>
            <p>Špecializované vzdelanie v oblasti bezpečnosti informačných systémov a kryptografie</p>
          </div>

          <div className="programs-grid">
            {cybersecurityPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
