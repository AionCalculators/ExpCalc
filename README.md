# Aion XP Calculator

A web application for calculating experience points (XP) requirements in the MMORPG Aion.

## Features

- **XP Calculation**: Calculate the total XP needed to reach your target level from your current level and XP
- **Interactive XP Bar**: Click or drag on a 20-segment bar to set your current XP visually
- **Version Support**: Switch between Aion 1.0 and 4.0+ XP tables (levels 1-65)
- **Iteration Calculator**: Enter XP per iteration (quest, kill, etc.) to see how many iterations you need

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

Push to the `main` branch and GitHub Actions will automatically build and deploy.

### Manual Deployment

```bash
npm run deploy
```

## XP Data Source

XP requirements are sourced from [Aion PowerBook](https://aionpowerbook.com/powerbook/XP_Requirements).

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 (custom styling)

## License

MIT
