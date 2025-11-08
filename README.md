# TUKE KPI Virtual - Katedra počítačov a informatiky

Modern React-based website for the Department of Computers and Informatics at TUKE.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and modern user interface with smooth animations
- **Component-Based**: Built with reusable React components
- **CSS Animations**: Smooth fade-in effects and floating animations
- **Interactive Navigation**: Multi-level dropdown menus
- **Counter Animations**: Animated statistics counters
- **Contact Form**: Functional contact form with validation
- **Optimized Performance**: Lazy loading and intersection observers
- **Dynamic Content Management**: Easy-to-update news, events, and achievements
- **API-Ready Architecture**: Built for future backend integration

## Project Structure

```
kpi_virtual/
├── index.html
├── package.json
├── vite.config.js
├── CONTENT_MANAGEMENT.md   # Content management guide
├── src/
│   ├── main.jsx           # Entry point
│   ├── App.jsx            # Main app component
│   ├── App.css            # All styles (preserved from original)
│   ├── components/
│   │   ├── Navbar.jsx     # Navigation with dropdowns
│   │   ├── Hero.jsx       # Hero section with animations
│   │   ├── Stats.jsx      # Statistics with counters
│   │   ├── Features.jsx   # Features grid
│   │   ├── DynamicContent.jsx  # News/Events/Success cards
│   │   ├── Programs.jsx   # Study programs
│   │   ├── Contact.jsx    # Contact form
│   │   └── Footer.jsx     # Footer
│   ├── data/              # 📁 DYNAMIC CONTENT (Easy to update!)
│   │   ├── news.js        # News items data
│   │   ├── events.js      # Events data
│   │   ├── achievements.js # Achievements data
│   │   └── index.js       # Centralized data exports
│   ├── services/
│   │   └── contentService.js  # API service layer (future-ready)
│   ├── utils/
│   │   └── dateUtils.js   # Date formatting utilities
│   └── hooks/
│       └── useScrollEffects.js  # Custom scroll effects hook
└── resourse/
    └── optimized-kpi-website.html  # Original HTML file
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling (all original CSS preserved)
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## CSS Structure

All CSS from the original HTML file has been preserved exactly in `src/App.css`, including:
- Animations (float, complexFloat, rotate, fadeInUp, etc.)
- Responsive breakpoints
- All color schemes and gradients
- Hover effects and transitions
- Print styles

## Components Overview

### Navbar
- Fixed navigation with scroll effect
- Multi-level dropdown menus
- Language switcher (EN/SK)
- Search functionality
- Mobile menu toggle

### Hero
- Large animated KPI text
- Floating icons and geometric shapes
- Call-to-action buttons
- Gradient background with patterns

### Stats
- Animated counters
- Intersection observer for triggering animations
- Four key statistics

### Features
- Six feature cards
- Hover effects
- Animated icons

### DynamicContent
- Three sections: News, Events, Success
- Card-based layout
- Category tags and dates
- Image placeholders

### Programs
- Two program categories: Informatika and Kyberbezpečnosť
- Bachelor and Master's programs
- Featured program highlighting
- Detailed feature lists

### Contact
- Contact information
- Form with validation
- Submit handling with loading state

### Footer
- Four-column layout
- Social media links
- Footer navigation
- Copyright information

## Managing Dynamic Content

### Quick Update Guide

Want to add/update News, Events, or Achievements? It's super easy!

**1. Navigate to the data files:**
- News: `src/data/news.js`
- Events: `src/data/events.js`
- Achievements: `src/data/achievements.js`

**2. Add a new item:**
```javascript
{
  id: 4, // Next available ID
  title: 'Your title here',
  description: 'Brief description',
  image: 'https://your-image-url.com/image.jpg',
  date: '2025-11-20', // YYYY-MM-DD format
  category: 'Novinky', // or 'Udalosti' or 'Úspechy'
  active: true,
  featured: false,
  link: '#'
}
```

**3. Save the file and refresh your browser!**

📖 **Full Guide**: See [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md) for detailed instructions.

### Key Features

✅ **No coding required** - Just edit data files
✅ **Show/hide items** - Set `active: false` to hide without deleting
✅ **Feature important items** - Set `featured: true` for highlighting
✅ **Date formatting** - Automatically formats dates to DD.MM.YYYY
✅ **API-ready** - Easy migration to backend database when needed

### Example: Adding a News Item

```javascript
// In src/data/news.js
export const newsData = [
  // ... existing items
  {
    id: 4,
    title: 'Nová spolupráca s Google',
    description: 'Katedra začína spoluprácu s Google na výskume AI.',
    image: '/images/news/google-partnership.jpg',
    date: '2025-11-20',
    category: 'Novinky',
    active: true,
    featured: true,
    link: '#'
  }
]
```

### Using the Content Service (API Integration)

When ready to connect to a backend:

```javascript
// Set environment variable
REACT_APP_API_URL=https://your-api.com/api

// Uncomment API calls in src/services/contentService.js
// Components automatically update - no changes needed!
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Documentation

- [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md) - Complete guide for managing dynamic content
- [README.md](README.md) - This file (project overview)

## License

© 2025 Katedra počítačov a informatiky, TUKE. All rights reserved.
