# Hexallo - Event Booking Platform

A Next.js application with Tailwind CSS built using atomic design principles.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── atoms/          # Basic building blocks
│   │   ├── Dropdown.js
│   │   ├── Logo.js
│   │   ├── NavLink.js
│   │   └── SearchInput.js
│   ├── molecules/      # Simple component combinations
│   │   └── SearchBar.js
│   └── organisms/      # Complex components
│       ├── HeroSection.js
│       ├── MainNav.js
│       ├── SubNav.js
│       └── TopHeader.js
├── public/             # Static assets (add your images here)
└── package.json
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Images

To replace the placeholder image in the hero section:

1. Add your Venice image to the `public` folder (e.g., `public/venice-hero.jpg`)
2. Update `components/organisms/HeroSection.js`:
    - Replace the `backgroundImage` URL with `/venice-hero.jpg`

## Technologies

-   Next.js 14
-   React 18
-   Tailwind CSS 3
-   Atomic Design Pattern
