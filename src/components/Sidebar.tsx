import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Map, TrendingUp, MapPin, Users, Calendar,
  BarChart3, Beaker, Droplets, Sparkles, FileText, Settings,
  Leaf, Menu, Moon, Sun, ChevronRight
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/utils'

/* ─── Nav structure with groups ───────────────────────────── */
const NAV_GROUPS = [
  {
    label: 'OVERVIEW',
    items: [
      { to: '/',                   label: 'Dashboard',          icon: LayoutDashboard },
      { to: '/gis-explorer',       label: 'GIS Explorer',       icon: Map,        badge: 'Live',  badgeColor: 'bg-green-500' },
      { to: '/production-analytics',label:'Production Analytics',icon: TrendingUp },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { to: '/land-registry',   label: 'Land Registry',    icon: MapPin    },
      { to: '/farmers',         label: 'Farmers',          icon: Users     },
      { to: '/planting-seasons',label: 'Planting Seasons', icon: Calendar  },
      { to: '/harvest-monitoring',label:'Harvest Monitoring',icon: BarChart3 },
    ],
  },
  {
    label: 'RESOURCES',
    items: [
      { to: '/fertilizer',      label: 'Fertilizer',       icon: Beaker   },
      { to: '/water-irrigation',label: 'Water & Irrigation',icon: Droplets },
    ],
  },
  {
    label: 'INTELLIGENCE',
    items: [
      { to: '/ai-insights',    label: 'AI Insights',   icon: Sparkles, badge: 'AI',   badgeColor: 'bg-violet-500' },
      { to: '/reports',        label: 'Reports',        icon: FileText  },
      { to: '/administration', label: 'Administration', icon: Settings  },
    ],
  },
]

/* ─── Icon map for collapsed tooltip ──────────────────────── */
const FLAT = NAV_GROUPS.flatMap(g => g.items)

export default function Sidebar() {
  const { theme, toggle } = useTheme()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        'flex flex-col h-full bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-800 transition-all duration-300 shrink-0',
        collapsed ? 'w-[60px]' : 'w-[220px]'
      )}
    >
      {/* ── Logo + collapse toggle ── */}
      <div className={cn(
        'flex items-center border-b border-gray-100 dark:border-gray-800 shrink-0',
        collapsed ? 'px-0 py-4 justify-center flex-col gap-3' : 'px-4 py-4 justify-between'
      )}>
        {collapsed ? (
          <>
            <div className="w-9 h-9 bg-green-700 rounded-xl flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <button
              onClick={() => setCollapsed(false)}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
            >
              <Menu className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-green-700 rounded-xl flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white leading-none">AgriMoon</div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-none">Agricultural Intelligence</div>
              </div>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
            >
              <Menu className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>

      {/* ── Season badge (hidden when collapsed) ── */}
      {!collapsed && (
        <div className="px-3 py-3 shrink-0">
          <div className="bg-green-50 dark:bg-green-950/40 rounded-xl px-3 py-2">
            <div className="text-[9px] text-green-600 dark:text-green-400 font-bold uppercase tracking-wider">Current Season</div>
            <div className="text-xs font-semibold text-green-800 dark:text-green-300 mt-0.5">2025 – Season A</div>
            <div className="text-[10px] text-green-600/70 dark:text-green-500">Mar 2025 – Aug 2025</div>
          </div>
        </div>
      )}

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto px-2 pb-2">
        {collapsed ? (
          /* Collapsed: only icons */
          <div className="mt-2 space-y-1">
            {FLAT.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                title={label}
                className={({ isActive }) => cn(
                  'flex items-center justify-center w-10 h-10 rounded-xl mx-auto transition-all',
                  isActive
                    ? 'bg-green-700 text-white shadow-sm'
                    : 'text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300'
                )}
              >
                <Icon className="w-4 h-4 shrink-0" />
              </NavLink>
            ))}
          </div>
        ) : (
          /* Expanded: groups with labels */
          <div className="space-y-4 mt-1">
            {NAV_GROUPS.map(group => (
              <div key={group.label}>
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest px-3 mb-1">
                  {group.label}
                </p>
                <div className="space-y-0.5">
                  {group.items.map(({ to, label, icon: Icon, badge, badgeColor }) => (
                    <NavLink
                      key={to}
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) => cn(
                        'flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all group',
                        isActive
                          ? 'bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 font-semibold'
                          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-gray-800 dark:hover:text-gray-200'
                      )}
                    >
                      {({ isActive }) => (
                        <>
                          <Icon className={cn('w-4 h-4 shrink-0', isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300')} />
                          <span className="flex-1 truncate text-[13px]">{label}</span>
                          {badge && (
                            <span className={cn('text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full leading-none', badgeColor)}>
                              {badge}
                            </span>
                          )}
                          {isActive && !badge && (
                            <ChevronRight className="w-3 h-3 text-green-500 dark:text-green-400 opacity-60" />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* ── Footer ── */}
      <div className={cn(
        'border-t border-gray-100 dark:border-gray-800 shrink-0',
        collapsed ? 'px-1 py-3 flex flex-col items-center gap-2' : 'px-3 py-3 space-y-1'
      )}>
        {collapsed ? (
          <>
            <button
              onClick={toggle}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-xs font-bold text-green-700 dark:text-green-400">
              SA
            </div>
            <div title="© MinLabs" className="w-6 h-6 rounded-md bg-green-700 flex items-center justify-center">
              <span className="text-[8px] font-black text-white leading-none">ML</span>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={toggle}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
              <div className="w-7 h-7 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-xs font-bold text-green-700 dark:text-green-400 shrink-0">
                SA
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 dark:text-white truncate">Super Admin</div>
                <div className="text-[10px] text-gray-400 truncate">Administrator</div>
              </div>
              <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
            </div>
            <div className="flex items-center justify-center gap-1 pt-1">
              <div className="w-4 h-4 rounded bg-green-700 flex items-center justify-center">
                <span className="text-[7px] font-black text-white leading-none">ML</span>
              </div>
              <span className="text-[9px] text-gray-400 dark:text-gray-600 font-medium">
                © {new Date().getFullYear()} MinLabs
              </span>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
