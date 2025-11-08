/**
 * Content Service
 *
 * This service provides a centralized way to fetch content data.
 * Currently using local data files, but can be easily adapted to fetch from an API.
 */

import { getActiveNews, getFeaturedNews, getNewsById } from '../data/news'
import { getActiveEvents, getUpcomingEvents, getFeaturedEvents, getEventById } from '../data/events'
import { getActiveAchievements, getFeaturedAchievements, getAchievementsByType, getAchievementById } from '../data/achievements'

// Configuration for API endpoints (when you have a backend)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

/**
 * Simulate API delay for development (optional)
 */
const simulateDelay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms))

// ==================== NEWS METHODS ====================

/**
 * Fetch news items
 * @param {Object} options - Query options
 * @param {number} options.limit - Limit number of items
 * @param {boolean} options.featured - Only featured items
 * @returns {Promise<Array>} Array of news items
 */
export const fetchNews = async ({ limit = null, featured = false } = {}) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/news?limit=${limit}&featured=${featured}`)
  // return await response.json()

  await simulateDelay()
  return featured ? getFeaturedNews() : getActiveNews(limit)
}

/**
 * Fetch single news item by ID
 * @param {number} id - News item ID
 * @returns {Promise<Object|null>} News item or null
 */
export const fetchNewsById = async (id) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/news/${id}`)
  // return await response.json()

  await simulateDelay()
  return getNewsById(id)
}

// ==================== EVENTS METHODS ====================

/**
 * Fetch events
 * @param {Object} options - Query options
 * @param {number} options.limit - Limit number of items
 * @param {boolean} options.upcoming - Only upcoming events
 * @param {boolean} options.featured - Only featured items
 * @returns {Promise<Array>} Array of events
 */
export const fetchEvents = async ({ limit = null, upcoming = false, featured = false } = {}) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/events?limit=${limit}&upcoming=${upcoming}&featured=${featured}`)
  // return await response.json()

  await simulateDelay()
  if (featured) return getFeaturedEvents()
  if (upcoming) return getUpcomingEvents()
  return getActiveEvents(limit)
}

/**
 * Fetch single event by ID
 * @param {number} id - Event ID
 * @returns {Promise<Object|null>} Event or null
 */
export const fetchEventById = async (id) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/events/${id}`)
  // return await response.json()

  await simulateDelay()
  return getEventById(id)
}

// ==================== ACHIEVEMENTS METHODS ====================

/**
 * Fetch achievements
 * @param {Object} options - Query options
 * @param {number} options.limit - Limit number of items
 * @param {boolean} options.featured - Only featured items
 * @param {string} options.type - Filter by type (award, publication, grant, etc.)
 * @returns {Promise<Array>} Array of achievements
 */
export const fetchAchievements = async ({ limit = null, featured = false, type = null } = {}) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/achievements?limit=${limit}&featured=${featured}&type=${type}`)
  // return await response.json()

  await simulateDelay()
  if (featured) return getFeaturedAchievements()
  if (type) return getAchievementsByType(type)
  return getActiveAchievements(limit)
}

/**
 * Fetch single achievement by ID
 * @param {number} id - Achievement ID
 * @returns {Promise<Object|null>} Achievement or null
 */
export const fetchAchievementById = async (id) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/achievements/${id}`)
  // return await response.json()

  await simulateDelay()
  return getAchievementById(id)
}

// ==================== COMBINED METHODS ====================

/**
 * Fetch all homepage content at once
 * @returns {Promise<Object>} Object containing news, events, and achievements
 */
export const fetchHomepageContent = async () => {
  // When ready to use API, you can fetch all at once or in parallel:
  // const [news, events, achievements] = await Promise.all([
  //   fetchNews({ limit: 3 }),
  //   fetchEvents({ limit: 3 }),
  //   fetchAchievements({ limit: 3 })
  // ])

  const [news, events, achievements] = await Promise.all([
    fetchNews({ limit: 3 }),
    fetchEvents({ limit: 3 }),
    fetchAchievements({ limit: 3 })
  ])

  return { news, events, achievements }
}

/**
 * Search across all content types
 * @param {string} query - Search query
 * @returns {Promise<Object>} Object containing search results by type
 */
export const searchContent = async (query) => {
  // When ready to use API, replace with:
  // const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`)
  // return await response.json()

  await simulateDelay()

  const lowerQuery = query.toLowerCase()

  const news = getActiveNews().filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  )

  const events = getActiveEvents().filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  )

  const achievements = getActiveAchievements().filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery)
  )

  return { news, events, achievements }
}

// ==================== CREATE/UPDATE/DELETE METHODS (For Admin Panel) ====================

/**
 * Create new content item
 * @param {string} type - Content type (news, event, achievement)
 * @param {Object} data - Content data
 * @returns {Promise<Object>} Created item
 */
export const createContent = async (type, data) => {
  // When ready to use API:
  // const response = await fetch(`${API_BASE_URL}/${type}`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })
  // return await response.json()

  throw new Error('Create functionality requires backend API')
}

/**
 * Update existing content item
 * @param {string} type - Content type (news, event, achievement)
 * @param {number} id - Item ID
 * @param {Object} data - Updated data
 * @returns {Promise<Object>} Updated item
 */
export const updateContent = async (type, id, data) => {
  // When ready to use API:
  // const response = await fetch(`${API_BASE_URL}/${type}/${id}`, {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })
  // return await response.json()

  throw new Error('Update functionality requires backend API')
}

/**
 * Delete content item
 * @param {string} type - Content type (news, event, achievement)
 * @param {number} id - Item ID
 * @returns {Promise<boolean>} Success status
 */
export const deleteContent = async (type, id) => {
  // When ready to use API:
  // const response = await fetch(`${API_BASE_URL}/${type}/${id}`, {
  //   method: 'DELETE'
  // })
  // return response.ok

  throw new Error('Delete functionality requires backend API')
}
