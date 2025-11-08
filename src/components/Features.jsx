import React from 'react'

const Features = () => {
  const features = [
    {
      icon: 'graduation-cap',
      title: 'Tri stupne štúdia',
      description: 'Bakalárske, magisterské a doktorandské štúdium v oblasti informatiky a kyberbezpečnosti.'
    },
    {
      icon: 'industry',
      title: 'Spolupráca s praxou',
      description: 'Najlepší na Slovensku v spolupráci s praxou. Členovia IT Valley asociácie s kontaktmi na firmy.'
    },
    {
      icon: 'laptop-code',
      title: 'Moderné technológie',
      description: 'Vyučujeme najnovšie technológie a pripravujeme vás pre priemyselnú prax, nie len pre teóriu.'
    },
    {
      icon: 'project-diagram',
      title: 'Výskumné projekty',
      description: 'Zapojenie do zaujímavých výskumných projektov a plná spolupráca s praxou cez tímové projekty.'
    },
    {
      icon: 'globe-europe',
      title: 'Medzinárodné mobility',
      description: 'Možnosť štúdia v zahraničí cez Erasmus/CEEPUS programy v Nemecku, Fínsku, Rakúsku a ďalších krajinách.'
    },
    {
      icon: 'briefcase',
      title: 'Vysoká zamestnanosť',
      description: 'Naši absolventi nachádzajú uplatnenie vo firmách ako T-Systems, IBM, SAP, Oracle, ESET a ďalších.'
    }
  ]

  return (
    <section className="features" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Prečo študovať informatiku u nás?</h2>
          <p>Najväčšia katedra informatiky na východnom Slovensku s bohatými tradíciami a moderným prístupom</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card fade-in" key={index}>
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
