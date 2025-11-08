import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Prosím vyplňte všetky povinné polia', 'error')
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      showNotification('Správa bola úspešne odoslaná!', 'success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  const showNotification = (message, type) => {
    // This would integrate with a notification system
    console.log(`${type}: ${message}`)
    alert(message)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Kontaktujte nás</h2>
            <p>Máte otázky alebo chcete začať štúdium? Sme tu pre vás.</p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Adresa</strong>
                  <p>
                    Katedra počítačov a informatiky<br />
                    Fakulta elektrotechniky a informatiky<br />
                    Technická univerzita v Košiciach<br />
                    Letná 9, 042 00 Košice
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p>kpi@tuke.sk</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <strong>Telefón</strong>
                  <p>+421 55 602 4000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Meno *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Predmet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Vyberte predmet</option>
                  <option value="info">Informácie o štúdiu</option>
                  <option value="admission">Prijímacie konanie</option>
                  <option value="technical">Technická podpora</option>
                  <option value="other">Iné</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Správa *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Odosiela sa...' : 'Odoslať správu'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
