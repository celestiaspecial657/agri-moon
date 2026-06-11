# 🌾 Agri-Moon — Agricultural Management System

> A modern, full-featured agricultural management platform built with React, TypeScript, and Vite. Agri-Moon empowers farmers, agronomists, and administrators with real-time data, GIS mapping, AI-driven insights, and comprehensive production analytics.

---

## 📸 Overview

Agri-Moon is a smart agriculture dashboard that consolidates land registry, farmer data, planting seasons, harvest monitoring, fertilizer management, water irrigation, and production analytics into a single, intuitive interface. It also features an interactive GIS Explorer powered by Leaflet and an AI Insights module to support data-driven agricultural decision-making.

---

## ✨ Features

| Module | Description |
|---|---|
| 🗺️ **Dashboard** | Overview of key agricultural KPIs with interactive mini-map |
| 📋 **Land Registry** | Manage and track registered agricultural land parcels |
| 👨‍🌾 **Farmers** | Farmer profiles, contact details, and assigned land data |
| 🌱 **Planting Seasons** | Schedule and track crop planting cycles |
| 🌾 **Harvest Monitoring** | Monitor harvest progress, yields, and timelines |
| 🧪 **Fertilizer Management** | Track fertilizer types, quantities, and application schedules |
| 💧 **Water & Irrigation** | Monitor irrigation systems and water usage |
| 📊 **Production Analytics** | Visualize production trends with interactive Recharts graphs |
| 🌍 **GIS Explorer** | Full interactive map with Leaflet for spatial land analysis |
| 🤖 **AI Insights** | AI-powered recommendations and agricultural pattern analysis |
| 📄 **Reports** | Generate and export agricultural reports |
| ⚙️ **Administration** | System configuration, user roles, and settings |

---

## 🛠️ Tech Stack

### Core
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript 6](https://www.typescriptlang.org/)** — Statically typed JavaScript
- **[Vite 8](https://vite.dev/)** — Next-generation build tool with HMR

### UI & Styling
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** — Production-ready animations
- **[Lucide React](https://lucide.dev/)** — Consistent icon library
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Conditional class management

### Data & Visualization
- **[Recharts 3](https://recharts.org/)** — Composable charting library built on D3
- **[Leaflet](https://leafletjs.com/)** + **[React-Leaflet 5](https://react-leaflet.js.org/)** — Interactive GIS mapping

### Routing & State
- **[React Router DOM 7](https://reactrouter.com/)** — Client-side routing
- **React Context API** — Global theme and state management

### Dev & Quality
- **ESLint 10** — Code linting with TypeScript-aware rules
- **PostCSS + Autoprefixer** — CSS processing pipeline

---

## 📁 Project Structure

```
agri-moon/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # Reusable UI components
│   │   ├── DashboardMap.tsx # Leaflet map for the dashboard
│   │   ├── Header.tsx       # Top navigation bar
│   │   ├── Layout.tsx       # Root layout wrapper
│   │   ├── MapController.tsx# Leaflet map controller utilities
│   │   ├── MiniMap.tsx      # Compact map preview component
│   │   └── Sidebar.tsx      # Navigation sidebar
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/light theme provider
│   ├── hooks/
│   │   └── useMapFix.ts     # Custom hook for Leaflet icon fix
│   ├── lib/
│   │   ├── data.ts          # Mock / seed data
│   │   └── utils.ts         # Shared utility functions
│   ├── pages/               # Route-level page components
│   │   ├── Dashboard.tsx
│   │   ├── LandRegistry.tsx
│   │   ├── Farmers.tsx
│   │   ├── PlantingSeasons.tsx
│   │   ├── HarvestMonitoring.tsx
│   │   ├── FertilizerManagement.tsx
│   │   ├── WaterIrrigation.tsx
│   │   ├── ProductionAnalytics.tsx
│   │   ├── GISExplorer.tsx
│   │   ├── AIInsights.tsx
│   │   ├── Reports.tsx
│   │   └── Administration.tsx
│   ├── App.tsx              # Root component & route definitions
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles & Tailwind directives
│   └── App.css              # Component-scoped styles
├── index.html               # HTML entry point
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x` — [Download](https://nodejs.org/)
- **npm** `>= 9.x` (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/agri-moon.git
cd agri-moon

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Type-check and build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## 🗺️ Routing

All routes are defined in [`src/App.tsx`](./src/App.tsx) and rendered within the shared `Layout` component.

| Path | Page |
|---|---|
| `/` | Dashboard |
| `/land-registry` | Land Registry |
| `/farmers` | Farmers |
| `/planting-seasons` | Planting Seasons |
| `/harvest-monitoring` | Harvest Monitoring |
| `/fertilizer` | Fertilizer Management |
| `/water-irrigation` | Water & Irrigation |
| `/production-analytics` | Production Analytics |
| `/gis-explorer` | GIS Explorer |
| `/ai-insights` | AI Insights |
| `/reports` | Reports |
| `/administration` | Administration |

---

## 🎨 Theme Support

Agri-Moon supports **dark and light mode** via the `ThemeContext` provider located at [`src/context/ThemeContext.tsx`](./src/context/ThemeContext.tsx). The theme preference is toggled from the Header and applied globally across all components.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">
  Made with ❤️ for smarter agriculture<br/>
  <sub>© 2026 <strong>MinLabs</strong>. All rights reserved.</sub>
</div>
