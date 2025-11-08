/**
 * Events Data
 *
 * To add a new event:
 * 1. Add a new object to the array below
 * 2. Follow the same structure with all required fields
 * 3. Use a unique ID for each item
 *
 * To remove an event:
 * 1. Simply delete the object from the array or set active: false
 */

export const eventsData = [
  {
    id: 1,
    title: 'Deň otvorených dverí KPI',
    description: 'Pozvánka na prezentáciu študijných programov a moderných laboratórií katedry počítačov a informatiky.',
    image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Open+Days',
    date: '2025-11-20',
    category: 'Udalosti',
    active: true,
    featured: true,
    location: 'KPI TUKE, Letná 9',
    time: '10:00 - 16:00',
    link: '#'
  },
  {
    id: 2,
    title: 'Workshop: Moderné webové technológie',
    description: 'Praktický workshop pre študentov o najnovších trendoch vo webovom vývoji a cloud technológiách.',
    image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Web+Workshop',
    date: '2025-11-25',
    category: 'Udalosti',
    active: true,
    featured: false,
    location: 'Online',
    time: '14:00 - 17:00',
    link: '#'
  },
  {
    id: 3,
    title: 'Prednáška: Budúcnosť umelej inteligencie',
    description: 'Hosťovská prednáška od odborníkov z Google DeepMind o trendoch v oblasti AI.',
    image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=AI+Future',
    date: '2025-11-30',
    category: 'Udalosti',
    active: true,
    featured: false,
    location: 'Aula TUKE',
    time: '18:00 - 20:00',
    link: '#'
  },
  // Add more events here following the same structure
  // {
  //   id: 4,
  //   title: 'Your event title',
  //   description: 'Your event description',
  //   image: 'https://via.placeholder.com/400x250/yourcolor/ffffff?text=Your+Text',
  //   date: '2025-12-01',
  //   category: 'Udalosti',
  //   active: true,
  //   featured: false,
  //   location: 'Your location',
  //   time: 'Your time',
  //   link: '#'
  // }
]

/**
 * Get all active events
 * @param {number} limit - Optional limit for number of items to return
 * @returns {Array} Array of active events
 */
export const getActiveEvents = (limit = null) => {
  const active = eventsData.filter(item => item.active)
  // Sort by date (upcoming events first)
  const sorted = active.sort((a, b) => new Date(a.date) - new Date(b.date))
  return limit ? sorted.slice(0, limit) : sorted
}

/**
 * Get upcoming events
 * @returns {Array} Array of upcoming events (after today)
 */
export const getUpcomingEvents = () => {
  const today = new Date()
  return eventsData.filter(item => {
    const eventDate = new Date(item.date)
    return item.active && eventDate >= today
  })
}

/**
 * Get featured events
 * @returns {Array} Array of featured events
 */
export const getFeaturedEvents = () => {
  return eventsData.filter(item => item.active && item.featured)
}

/**
 * Get event by ID
 * @param {number} id - Event ID
 * @returns {Object|null} Event or null if not found
 */
export const getEventById = (id) => {
  return eventsData.find(item => item.id === id) || null
}
