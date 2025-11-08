/**
 * Date utility functions
 */

/**
 * Format date string to DD.MM.YYYY format
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

/**
 * Check if date is in the future
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {boolean} True if date is in the future
 */
export const isFutureDate = (dateString) => {
  const date = new Date(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date >= today
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 days")
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Relative time string
 */
export const getRelativeTime = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = date - now
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    const absDays = Math.abs(diffDays)
    if (absDays === 0) return 'Dnes'
    if (absDays === 1) return 'Včera'
    if (absDays < 7) return `Pred ${absDays} dňami`
    if (absDays < 30) return `Pred ${Math.floor(absDays / 7)} týždňami`
    if (absDays < 365) return `Pred ${Math.floor(absDays / 30)} mesiacmi`
    return `Pred ${Math.floor(absDays / 365)} rokmi`
  } else {
    if (diffDays === 0) return 'Dnes'
    if (diffDays === 1) return 'Zajtra'
    if (diffDays < 7) return `O ${diffDays} dní`
    if (diffDays < 30) return `O ${Math.floor(diffDays / 7)} týždňov`
    return formatDate(dateString)
  }
}

/**
 * Sort array by date field
 * @param {Array} items - Array of items with date field
 * @param {boolean} ascending - Sort order (default: false = newest first)
 * @returns {Array} Sorted array
 */
export const sortByDate = (items, ascending = false) => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return ascending ? dateA - dateB : dateB - dateA
  })
}
