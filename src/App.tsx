import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import LandRegistry from './pages/LandRegistry'
import Farmers from './pages/Farmers'
import PlantingSeasons from './pages/PlantingSeasons'
import HarvestMonitoring from './pages/HarvestMonitoring'
import FertilizerManagement from './pages/FertilizerManagement'
import WaterIrrigation from './pages/WaterIrrigation'
import ProductionAnalytics from './pages/ProductionAnalytics'
import GISExplorer from './pages/GISExplorer'
import AIInsights from './pages/AIInsights'
import Reports from './pages/Reports'
import Administration from './pages/Administration'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="land-registry" element={<LandRegistry />} />
            <Route path="farmers" element={<Farmers />} />
            <Route path="planting-seasons" element={<PlantingSeasons />} />
            <Route path="harvest-monitoring" element={<HarvestMonitoring />} />
            <Route path="fertilizer" element={<FertilizerManagement />} />
            <Route path="water-irrigation" element={<WaterIrrigation />} />
            <Route path="production-analytics" element={<ProductionAnalytics />} />
            <Route path="gis-explorer" element={<GISExplorer />} />
            <Route path="ai-insights" element={<AIInsights />} />
            <Route path="reports" element={<Reports />} />
            <Route path="administration" element={<Administration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
