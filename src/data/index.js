/**
 * Centralized Data Management
 *
 * This file provides easy access to all data management functions.
 * Import from here instead of individual data files for cleaner imports.
 */

// News
export {
  newsData,
  getActiveNews,
  getFeaturedNews,
  getNewsById
} from './news'

// Events
export {
  eventsData,
  getActiveEvents,
  getUpcomingEvents,
  getFeaturedEvents,
  getEventById
} from './events'

// Achievements
export {
  achievementsData,
  getActiveAchievements,
  getFeaturedAchievements,
  getAchievementsByType,
  getAchievementById
} from './achievements'

/**
 * Get all content data at once
 * @returns {Object} Object containing all content arrays
 */
export const getAllContent = () => {
  const { newsData, getActiveNews } = require('./news')
  const { eventsData, getActiveEvents } = require('./events')
  const { achievementsData, getActiveAchievements } = require('./achievements')

  return {
    news: getActiveNews(),
    events: getActiveEvents(),
    achievements: getActiveAchievements(),
    rawData: {
      news: newsData,
      events: eventsData,
      achievements: achievementsData
    }
  }
}

/**
 * Get content statistics
 * @returns {Object} Statistics about content
 */
export const getContentStats = () => {
  const { newsData } = require('./news')
  const { eventsData } = require('./events')
  const { achievementsData } = require('./achievements')

  return {
    totalNews: newsData.filter(item => item.active).length,
    totalEvents: eventsData.filter(item => item.active).length,
    totalAchievements: achievementsData.filter(item => item.active).length,
    featuredNews: newsData.filter(item => item.active && item.featured).length,
    featuredEvents: eventsData.filter(item => item.active && item.featured).length,
    featuredAchievements: achievementsData.filter(item => item.active && item.featured).length
  }
}
