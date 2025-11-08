# Content Management Guide

This guide explains how to manage dynamic content (News, Events, and Achievements) in the KPI Virtual website.

## Quick Start

All dynamic content is stored in separate data files in the `src/data/` directory:

- **News**: `src/data/news.js`
- **Events**: `src/data/events.js`
- **Achievements**: `src/data/achievements.js`

## Adding New Content

### Adding a News Item

1. Open `src/data/news.js`
2. Add a new object to the `newsData` array:

```javascript
{
  id: 4, // Use next available ID
  title: 'Your news title',
  description: 'Brief description of the news',
  image: 'https://via.placeholder.com/400x250/yourcolor/ffffff?text=Your+Text',
  date: '2025-11-20', // Format: YYYY-MM-DD
  category: 'Novinky',
  active: true, // Set to false to hide without deleting
  featured: false, // Set to true to feature on homepage
  link: '#' // Optional link to full article
}
```

### Adding an Event

1. Open `src/data/events.js`
2. Add a new object to the `eventsData` array:

```javascript
{
  id: 4,
  title: 'Your event title',
  description: 'Event description',
  image: 'https://via.placeholder.com/400x250/yourcolor/ffffff?text=Your+Event',
  date: '2025-12-01', // Format: YYYY-MM-DD
  category: 'Udalosti',
  active: true,
  featured: false,
  location: 'Event location', // Specific to events
  time: '14:00 - 16:00', // Specific to events
  link: '#'
}
```

### Adding an Achievement

1. Open `src/data/achievements.js`
2. Add a new object to the `achievementsData` array:

```javascript
{
  id: 4,
  title: 'Your achievement title',
  description: 'Achievement description',
  image: 'https://via.placeholder.com/400x250/yourcolor/ffffff?text=Your+Achievement',
  date: '2025-11-15', // Format: YYYY-MM-DD
  category: 'Úspechy',
  active: true,
  featured: false,
  type: 'award', // Options: 'award', 'publication', 'grant', 'competition', 'other'
  recipient: 'Recipient name',
  link: '#'
}
```

## Removing/Hiding Content

### Temporary Hide (Recommended)
Set `active: false` in the item object. This keeps the data but removes it from display:

```javascript
{
  id: 1,
  title: 'Old news',
  // ... other fields
  active: false, // This item won't display
}
```

### Permanent Delete
Simply delete the entire object from the array.

## Updating Existing Content

1. Find the item by its `id`
2. Modify the fields you want to change
3. Save the file

The changes will appear immediately in development mode (after page refresh).

## Content Fields Reference

### Common Fields (All Types)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | Yes | Unique identifier |
| `title` | string | Yes | Item title |
| `description` | string | Yes | Brief description |
| `image` | string | Yes | Image URL |
| `date` | string | Yes | Date in YYYY-MM-DD format |
| `category` | string | Yes | Display category label |
| `active` | boolean | Yes | Show/hide item |
| `featured` | boolean | Yes | Feature on homepage |
| `link` | string | No | Link to full content |

### Event-Specific Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `location` | string | Yes | Event location |
| `time` | string | Yes | Event time |

### Achievement-Specific Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Type: award, publication, grant, competition, other |
| `recipient` | string | Yes | Who received the achievement |
| `amount` | string | No | Grant amount (for grants) |

## Image Guidelines

### Recommended Image Specifications
- **Size**: 400x250 pixels
- **Format**: JPG or PNG
- **Optimization**: Compress for web (max 100KB)

### Using Placeholder Images
For testing, use: `https://via.placeholder.com/400x250/COLOR/ffffff?text=Your+Text`
- Replace `COLOR` with hex color (e.g., `3b82f6`)
- Replace `Your+Text` with URL-encoded text

### Using Real Images
1. Store images in `public/images/` directory
2. Reference as: `/images/your-image.jpg`

Example:
```javascript
image: '/images/news/ai-laboratory-opening.jpg'
```

## Advanced Features

### Limiting Displayed Items

The homepage shows 3 items per section by default. To change this, edit `src/components/DynamicContent.jsx`:

```javascript
const newsItems = getActiveNews(5) // Show 5 news items
const events = getActiveEvents(3)  // Show 3 events
```

### Filtering by Type (Achievements)

```javascript
import { getAchievementsByType } from '../data/achievements'

const publications = getAchievementsByType('publication')
const awards = getAchievementsByType('award')
```

### Getting Featured Items

```javascript
import { getFeaturedNews } from '../data/news'
import { getFeaturedEvents } from '../data/events'

const featured = getFeaturedNews()
```

### Getting Upcoming Events

```javascript
import { getUpcomingEvents } from '../data/events'

const upcoming = getUpcomingEvents() // Only future events
```

## Using the Content Service (API Ready)

The `contentService.js` provides a future-proof way to fetch content:

```javascript
import { fetchNews, fetchEvents, fetchAchievements } from '../services/contentService'

// In a component
useEffect(() => {
  fetchNews({ limit: 3, featured: false })
    .then(news => setNews(news))
}, [])
```

When you're ready to connect to a backend API:
1. Set `REACT_APP_API_URL` environment variable
2. Uncomment API fetch calls in `src/services/contentService.js`
3. No changes needed in components!

## Date Formatting

Dates are automatically formatted using `formatDate()` utility:

```javascript
import { formatDate } from '../utils/dateUtils'

formatDate('2025-11-20') // Returns: "20.11.2025"
```

Other date utilities:
- `isFutureDate(dateString)` - Check if date is in future
- `getRelativeTime(dateString)` - Get relative time (e.g., "2 days ago")
- `sortByDate(items)` - Sort array by date

## Best Practices

### 1. Always Use Unique IDs
Each item must have a unique ID within its type:
```javascript
// ✅ Good
{ id: 1, ... }, { id: 2, ... }, { id: 3, ... }

// ❌ Bad
{ id: 1, ... }, { id: 1, ... } // Duplicate IDs!
```

### 2. Use Consistent Date Format
Always use YYYY-MM-DD format:
```javascript
// ✅ Good
date: '2025-11-20'

// ❌ Bad
date: '20/11/2025'  // Wrong format
date: '2025-11-20T10:00:00' // Too specific
```

### 3. Keep Descriptions Brief
Descriptions should be 1-2 sentences (max 150 characters):
```javascript
// ✅ Good
description: 'Brief summary that fits in the card.'

// ❌ Bad (too long)
description: 'Very long description that goes on and on...'
```

### 4. Use Active Flag Instead of Deleting
```javascript
// ✅ Good - Keep history
{ id: 1, active: false, ... }

// ❌ Bad - Lose data forever
// Delete the entire object
```

### 5. Feature Important Items
Use the `featured` flag to highlight important content:
```javascript
featured: true // Shows with special styling
```

## Troubleshooting

### Item Not Showing Up?
1. Check `active: true` is set
2. Verify unique ID
3. Check date format (YYYY-MM-DD)
4. Refresh browser (Ctrl+R or Cmd+R)

### Image Not Loading?
1. Verify image URL is accessible
2. Check CORS if loading from external URL
3. Use placeholder images for testing
4. Check browser console for errors

### Changes Not Appearing?
1. Save the file (Ctrl+S or Cmd+S)
2. Check terminal for build errors
3. Hard refresh browser (Ctrl+Shift+R)
4. Restart dev server if needed

## Migration to Backend API

When ready to connect to a database/backend:

1. **Set up backend API** with endpoints:
   - `GET /api/news`
   - `GET /api/events`
   - `GET /api/achievements`

2. **Update environment variables**:
   ```bash
   REACT_APP_API_URL=https://your-api.com/api
   ```

3. **Uncomment API calls** in `src/services/contentService.js`

4. **Components automatically update** - no changes needed!

## Support

For questions or issues with content management:
- Check this guide first
- Review example items in data files
- Check browser console for errors
- Contact development team

---

Last Updated: 2025-11-07
