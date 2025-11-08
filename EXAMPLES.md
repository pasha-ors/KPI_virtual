# Content Management Examples

Quick reference examples for adding and managing content.

## Adding a News Item

```javascript
// In src/data/news.js
{
  id: 4,
  title: 'Katedra organizuje hackathon pre študentov',
  description: 'Už 15. novembra sa uskutoční hackathon zameraný na vývoj AI aplikácií.',
  image: '/images/news/hackathon-2025.jpg',
  date: '2025-11-08',
  category: 'Novinky',
  active: true,
  featured: false,
  link: '/novinky/hackathon-2025'
}
```

## Adding an Event

```javascript
// In src/data/events.js
{
  id: 4,
  title: 'Hackathon: AI Challenge 2025',
  description: '24-hodinový hackathon pre študentov všetkých ročníkov. Vytvorte AI aplikáciu a vyhrajte hodnotné ceny.',
  image: '/images/events/hackathon-2025.jpg',
  date: '2025-11-15',
  category: 'Udalosti',
  active: true,
  featured: true,
  location: 'PK6, KPI TUKE',
  time: '09:00 - 09:00 (nasledujúci deň)',
  link: '/udalosti/hackathon-2025'
}
```

## Adding an Achievement

```javascript
// In src/data/achievements.js
{
  id: 4,
  title: 'Študenti získali 1. miesto na ACM ICPC',
  description: 'Tím KPI TUKE vyhral Central European Regional Contest programovacieho preteky ACM ICPC.',
  image: '/images/achievements/acm-icpc-2025.jpg',
  date: '2025-11-02',
  category: 'Úspechy',
  active: true,
  featured: true,
  type: 'competition',
  recipient: 'Tím KPI: Ján Novák, Peter Horváth, Mária Szabóová',
  link: '/uspechy/acm-icpc-2025'
}
```

## Hiding Content Temporarily

Instead of deleting, just set `active: false`:

```javascript
{
  id: 1,
  title: 'Stará udalosť',
  // ... other fields
  active: false, // This item won't display anymore
}
```

## Featuring Important Content

Set `featured: true` to highlight:

```javascript
{
  id: 2,
  title: 'Dôležitá novinka',
  // ... other fields
  featured: true, // This will be highlighted
}
```

## Working with Images

### Option 1: Use Local Images
1. Place image in `public/images/` directory
2. Reference it:
```javascript
image: '/images/news/my-image.jpg'
```

### Option 2: Use External URLs
```javascript
image: 'https://example.com/images/news-photo.jpg'
```

### Option 3: Use Placeholders (for testing)
```javascript
image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=News+Image'
```

## Advanced: Getting Specific Content

### In a Component

```javascript
import { getActiveNews, getFeaturedNews } from '../data/news'
import { getUpcomingEvents } from '../data/events'
import { getAchievementsByType } from '../data/achievements'

// Get all active news
const allNews = getActiveNews()

// Get only 5 news items
const limitedNews = getActiveNews(5)

// Get featured news only
const featured = getFeaturedNews()

// Get upcoming events
const upcoming = getUpcomingEvents()

// Get achievements by type
const publications = getAchievementsByType('publication')
const awards = getAchievementsByType('award')
const grants = getAchievementsByType('grant')
```

## Date Formatting Examples

```javascript
import { formatDate, getRelativeTime, isFutureDate } from '../utils/dateUtils'

// Format date
formatDate('2025-11-20') // Returns: "20.11.2025"

// Get relative time
getRelativeTime('2025-11-20') // Returns: "O 13 dní" (example)
getRelativeTime('2025-10-20') // Returns: "Pred 18 dňami" (example)

// Check if future
isFutureDate('2025-11-20') // Returns: true/false
```

## Complete Example: Adding Multiple Items at Once

```javascript
// In src/data/news.js
export const newsData = [
  // ... existing items
  {
    id: 4,
    title: 'Nová spolupráca s Microsoft',
    description: 'Katedra podpísala memorandum o spolupráci s Microsoft na výskume Azure AI.',
    image: '/images/news/microsoft-partnership.jpg',
    date: '2025-11-08',
    category: 'Novinky',
    active: true,
    featured: true,
    link: '#'
  },
  {
    id: 5,
    title: 'Laboratórium kybernetickej bezpečnosti sa rozširuje',
    description: 'Do laboratória pribudlo nové vybavenie v hodnote 100 000 €.',
    image: '/images/news/cybersec-lab.jpg',
    date: '2025-11-07',
    category: 'Novinky',
    active: true,
    featured: false,
    link: '#'
  },
  {
    id: 6,
    title: 'Študenti vytvorili mobilnú aplikáciu pre TUKE',
    description: 'Tímový projekt študentov 3. ročníka prináša novú mobilnú aplikáciu pre študentov.',
    image: '/images/news/mobile-app.jpg',
    date: '2025-11-05',
    category: 'Novinky',
    active: true,
    featured: false,
    link: '#'
  }
]
```

## Real-World Workflow

### Weekly Content Update
```
1. Monday: Add upcoming events for the week
2. Wednesday: Update news with recent achievements
3. Friday: Hide/archive old events by setting active: false
4. Monthly: Review and update featured items
```

### Before Important Events
```javascript
// 1. Add event with featured: true
{
  id: X,
  featured: true, // Make it stand out!
  // ... other fields
}

// 2. Add related news item
{
  id: Y,
  title: 'Registrácia na udalosť X je otvorená',
  // ... other fields
}
```

### After Successful Events
```javascript
// 1. Update event to active: false
{
  id: X,
  active: false, // Event is over
}

// 2. Add achievement about the event
{
  id: Z,
  title: 'Udalosť X bola úspešná',
  description: 'Zúčastnilo sa 150 študentov...',
  type: 'competition',
  // ... other fields
}
```

## Tips

1. **Keep IDs Sequential**: Use 1, 2, 3, 4, ... for easy management
2. **Date Format**: Always YYYY-MM-DD (e.g., 2025-11-20)
3. **Images**: Optimize images before uploading (max 100KB)
4. **Descriptions**: Keep under 150 characters for best display
5. **Active Flag**: Use it! Don't delete, just hide
6. **Featured**: Use sparingly (max 2-3 items at once)
7. **Links**: Use relative paths (/novinky/...) for internal links

## Need Help?

Check the [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md) for detailed documentation.
