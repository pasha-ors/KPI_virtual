/**
 * Achievements Data
 *
 * To add a new achievement:
 * 1. Add a new object to the array below
 * 2. Follow the same structure with all required fields
 * 3. Use a unique ID for each item
 *
 * To remove an achievement:
 * 1. Simply delete the object from the array or set active: false
 */

export const achievementsData = [
  {
    id: 1,
    title: 'Ocenenie za najlepší výskumný projekt',
    description: 'Prof. Novák získal prestížne ocenenie za výskum v oblasti strojového učenia a neurónových sietí.',
    image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Research+Award',
    date: '2025-11-01',
    category: 'Úspechy',
    active: true,
    featured: true,
    type: 'award',
    recipient: 'Prof. Novák',
    link: '#'
  },
  {
    id: 2,
    title: 'Publikácia v top časopise',
    description: 'Výskumný tím publikoval prielomový článok v IEEE Transactions on Computers.',
    image: 'https://via.placeholder.com/400x250/14b8a6/ffffff?text=IEEE+Publication',
    date: '2025-10-25',
    category: 'Úspechy',
    active: true,
    featured: false,
    type: 'publication',
    recipient: 'Výskumný tím KPI',
    link: '#'
  },
  {
    id: 3,
    title: 'Grant na výskum kyberbezpečnosti',
    description: 'Katedra získala grant vo výške 500 000 € na trojročný výskumný projekt v oblasti kybernetickej bezpečnosti.',
    image: 'https://via.placeholder.com/400x250/84cc16/ffffff?text=Cybersecurity+Grant',
    date: '2025-10-20',
    category: 'Úspechy',
    active: true,
    featured: true,
    type: 'grant',
    recipient: 'Katedra KPI',
    amount: '500 000 €',
    link: '#'
  },
  // Add more achievements here following the same structure
  // {
  //   id: 4,
  //   title: 'Your achievement title',
  //   description: 'Your achievement description',
  //   image: 'https://via.placeholder.com/400x250/yourcolor/ffffff?text=Your+Text',
  //   date: '2025-11-15',
  //   category: 'Úspechy',
  //   active: true,
  //   featured: false,
  //   type: 'award', // 'award', 'publication', 'grant', 'competition', 'other'
  //   recipient: 'Recipient name',
  //   link: '#'
  // }
]

/**
 * Get all active achievements
 * @param {number} limit - Optional limit for number of items to return
 * @returns {Array} Array of active achievements
 */
export const getActiveAchievements = (limit = null) => {
  const active = achievementsData.filter(item => item.active)
  // Sort by date (most recent first)
  const sorted = active.sort((a, b) => new Date(b.date) - new Date(a.date))
  return limit ? sorted.slice(0, limit) : sorted
}

/**
 * Get featured achievements
 * @returns {Array} Array of featured achievements
 */
export const getFeaturedAchievements = () => {
  return achievementsData.filter(item => item.active && item.featured)
}

/**
 * Get achievements by type
 * @param {string} type - Type of achievement (award, publication, grant, etc.)
 * @returns {Array} Array of achievements of specified type
 */
export const getAchievementsByType = (type) => {
  return achievementsData.filter(item => item.active && item.type === type)
}

/**
 * Get achievement by ID
 * @param {number} id - Achievement ID
 * @returns {Object|null} Achievement or null if not found
 */
export const getAchievementById = (id) => {
  return achievementsData.find(item => item.id === id) || null
}
