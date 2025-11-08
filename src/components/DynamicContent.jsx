import React from 'react'
import { getActiveNews } from '../data/news'
import { getActiveEvents } from '../data/events'
import { getActiveAchievements } from '../data/achievements'
import { formatDate } from '../utils/dateUtils'

const DynamicContent = () => {
  // Get data from external data files
  // Limit to 3 items per section for homepage display
  const newsItems = getActiveNews(3)
  const events = getActiveEvents(3)
  const achievements = getActiveAchievements(3)

  const CardGrid = ({ items, title, type }) => (
    <div className="news-section-wrapper">
      <div className="section-header-main">
        <h2>{title}</h2>
        <a href="#" className="btn-outline-small">Ďalšie {title.toLowerCase()}</a>
      </div>
      <div className="tuke-cards-grid">
        {items.map((item) => (
          <div className="tuke-card fade-in" key={item.id}>
            <div className="tuke-card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="tuke-card-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="tuke-card-meta">
                <span className={`card-category-tag ${type}`}>{item.category}</span>
                <span className="card-date">{formatDate(item.date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="dynamic-content">
      <div className="container">
        <CardGrid items={newsItems} title="Novinky KPI" type="news" />
        <CardGrid items={events} title="Udalosti" type="events" />
        <CardGrid items={achievements} title="Úspechy" type="success" />
      </div>
    </section>
  )
}

export default DynamicContent
