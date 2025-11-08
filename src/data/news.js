/**
 * News Data
 *
 * To add a new news item:
 * 1. Add a new object to the array below
 * 2. Follow the same structure with all required fields
 * 3. Use a unique ID for each item
 *
 * To remove a news item:
 * 1. Simply delete the object from the array or set active: false
 */

export const newsData = [
  {
    id: 1,
    title: 'Nové laboratórium pre umelú inteligenciu',
    description: 'Katedra otvorila moderné laboratórium vybavené najnovšími technológiami pre výskum AI a strojového učenia.',
    image: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=AI+Laboratory',
    date: '2025-11-15',
    category: 'Novinky',
    active: true,
    featured: false,
    link: '#'
  },
  {
    id: 2,
    title: 'Úspech študentov na medzinárodnej súťaži',
    description: 'Tím našich študentov obsadil 2. miesto na European Programming Contest 2025 v Amsterdame.',
    image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Programming+Contest',
    date: '2025-11-10',
    category: 'Novinky',
    active: true,
    featured: true,
    link: '#'
  },
  {
    id: 3,
    title: 'Spolupráca s firmou ESET',
    description: 'Podpísaná nová dohoda o spolupráci v oblasti výskumu kyberbezpečnosti a praktických stáží.',
    image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=ESET+Partnership',
    date: '2025-11-05',
    category: 'Novinky',
    active: true,
    featured: false,
    link: '#'
  },
  // Add more news items here following the same structure
  // {
  //   id: 4,
  //   title: 'Your title here',
  //   description: 'Your description here',
  //   image: 'https://via.placeholder.com/400x250/yourcolor/ffffff?text=Your+Text',
  //   date: '2025-11-20',
  //   category: 'Novinky',
  //   active: true,
  //   featured: false,
  //   link: '#'
  // }
]

/**
 * Get all active news items
 * @param {number} limit - Optional limit for number of items to return
 * @returns {Array} Array of active news items
 */
export const getActiveNews = (limit = null) => {
  const active = newsData.filter(item => item.active)
  return limit ? active.slice(0, limit) : active
}

/**
 * Get featured news items
 * @returns {Array} Array of featured news items
 */
export const getFeaturedNews = () => {
  return newsData.filter(item => item.active && item.featured)
}

/**
 * Get news item by ID
 * @param {number} id - News item ID
 * @returns {Object|null} News item or null if not found
 */
export const getNewsById = (id) => {
  return newsData.find(item => item.id === id) || null
}
