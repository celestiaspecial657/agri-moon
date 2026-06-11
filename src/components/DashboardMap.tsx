import { MapContainer, TileLayer, Polygon, Polyline, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import MapController from './MapController'
import { useMapFix } from '../hooks/useMapFix'

type LL     = [number, number]
type Status = 'Growing' | 'Harvest Ready' | 'Planted' | 'Fallow'

const STATUS_COLOR: Record<Status, { fill: string; stroke: string }> = {
  'Growing':       { fill: '#4ade80', stroke: '#15803d' },
  'Harvest Ready': { fill: '#d4a017', stroke: '#92400e' },
  'Planted':       { fill: '#22c55e', stroke: '#166534' },
  'Fallow':        { fill: '#c4c9c6', stroke: '#6b7280' },
}

const B_LAT = -6.3100, B_LNG = 108.3050
const C_LAT = 0.0045,  C_LNG = 0.0055, GAP = 0.0003

function cell(row: number, col: number): LL[] {
  const lat0 = B_LAT - row * C_LAT, lng0 = B_LNG + col * C_LNG
  return [
    [lat0,               lng0 + GAP],
    [lat0,               lng0 + C_LNG - GAP],
    [lat0 - C_LAT + GAP, lng0 + C_LNG - GAP],
    [lat0 - C_LAT + GAP, lng0 + GAP],
  ]
}

const GRID: { r:number; c:number; st:Status }[] = [
  {r:0,c:1,st:'Growing'},{r:0,c:2,st:'Growing'},{r:0,c:3,st:'Harvest Ready'},{r:0,c:4,st:'Growing'},
  {r:1,c:0,st:'Planted'},{r:1,c:1,st:'Growing'},{r:1,c:2,st:'Harvest Ready'},{r:1,c:3,st:'Growing'},
  {r:1,c:4,st:'Growing'},{r:1,c:5,st:'Fallow'},
  {r:2,c:0,st:'Growing'},{r:2,c:1,st:'Harvest Ready'},{r:2,c:2,st:'Growing'},{r:2,c:3,st:'Harvest Ready'},
  {r:2,c:4,st:'Planted'},{r:2,c:5,st:'Growing'},
  {r:3,c:0,st:'Fallow'},{r:3,c:1,st:'Growing'},{r:3,c:2,st:'Growing'},{r:3,c:3,st:'Growing'},
  {r:3,c:4,st:'Harvest Ready'},{r:3,c:5,st:'Growing'},
  {r:4,c:1,st:'Growing'},{r:4,c:2,st:'Harvest Ready'},{r:4,c:3,st:'Growing'},{r:4,c:4,st:'Growing'},
  {r:5,c:1,st:'Planted'},{r:5,c:2,st:'Growing'},{r:5,c:3,st:'Fallow'},{r:5,c:4,st:'Growing'},
]

const WATER_SRCS: LL[] = [
  [B_LAT - 0.5*C_LAT, B_LNG + 0.5*C_LNG],
  [B_LAT - 1.5*C_LAT, B_LNG + 3.5*C_LNG],
  [B_LAT - 3.0*C_LAT, B_LNG + 5.5*C_LNG],
  [B_LAT - 4.0*C_LAT, B_LNG + 2.5*C_LNG],
]

const CHANNELS: LL[][] = [
  [[B_LAT - 2.5*C_LAT, B_LNG - 0.2*C_LNG], [B_LAT - 2.5*C_LAT, B_LNG + 6.2*C_LNG]],
  [[B_LAT + 0.2*C_LAT, B_LNG + 2.5*C_LNG], [B_LAT - 5.8*C_LAT, B_LNG + 2.5*C_LNG]],
]

const LEGEND = [
  { label: 'Growing',            color: '#4ade80', type: 'rect' },
  { label: 'Harvest Ready',      color: '#d4a017', type: 'rect' },
  { label: 'Planted',            color: '#22c55e', type: 'rect' },
  { label: 'Fallow',             color: '#c4c9c6', type: 'rect' },
  { label: 'Water Source',       color: '#3b82f6', type: 'drop' },
  { label: 'Irrigation Channel', color: '#60a5fa', type: 'line' },
]

const waterIcon = L.divIcon({
  html: `<div style="width:20px;height:20px;background:white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#3b82f6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
    </svg></div>`,
  className: '', iconSize: [20, 20], iconAnchor: [10, 10],
})

const CENTER: LL = [B_LAT - 2.5*C_LAT, B_LNG + 2.75*C_LNG]

export default function DashboardMap() {
  const { setContainerRef, onMapReady } = useMapFix()

  return (
    /* Outer: fills whatever height the card gives it */
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Inner: absolute so Leaflet always gets a real pixel box */}
      <div ref={setContainerRef} style={{ position: 'absolute', inset: 0 }}>
        <MapContainer
          center={CENTER}
          zoom={13}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            maxZoom={19}
            maxNativeZoom={19}
          />

          {GRID.map((g, i) => {
            const c = STATUS_COLOR[g.st]
            return (
              <Polygon key={i} positions={cell(g.r, g.c)}
                pathOptions={{ color: c.stroke, fillColor: c.fill, fillOpacity: 0.5, weight: 1.5 }}>
                <Popup><span className="text-xs font-semibold" style={{ color: c.stroke }}>{g.st}</span></Popup>
              </Polygon>
            )
          })}

          {CHANNELS.map((ch, i) => (
            <Polyline key={i} positions={ch}
              pathOptions={{ color: '#60a5fa', weight: 2, opacity: 0.8, dashArray: '5 3' }} />
          ))}

          {WATER_SRCS.map((pos, i) => (
            <Marker key={i} position={pos} icon={waterIcon}>
              <Popup>Water Source {i + 1}</Popup>
            </Marker>
          ))}

          <MapController onReady={onMapReady} />
        </MapContainer>

        {/* Legend — bottom right */}
        <div style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 1000, pointerEvents: 'none' }}
          className="bg-white/95 backdrop-blur-sm rounded-xl shadow-card border border-gray-100 px-3 py-2.5">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Legend</p>
          {LEGEND.map(({ label, color, type }) => (
            <div key={label} className="flex items-center gap-2 mb-1.5 last:mb-0">
              {type === 'rect' && <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: color, opacity: 0.85 }} />}
              {type === 'drop' && (
                <span className="w-3 flex justify-center shrink-0">
                  <svg width="8" height="11" viewBox="0 0 9 12" fill={color}>
                    <path d="M4.5 0C4.5 0 0 5.5 0 8a4.5 4.5 0 009 0C9 5.5 4.5 0 4.5 0z" />
                  </svg>
                </span>
              )}
              {type === 'line' && <span className="w-3 block shrink-0" style={{ borderTop: `2px dashed ${color}` }} />}
              <span className="text-[10px] text-gray-600 whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>

        {/* Zoom controls — left */}
        <div style={{ position: 'absolute', left: 10, top: 48, zIndex: 1000 }} className="flex flex-col gap-1">
          <button className="w-8 h-8 bg-white/95 rounded-lg shadow-card border border-gray-200 flex items-center justify-center text-gray-600 font-bold text-base hover:bg-white select-none">+</button>
          <button className="w-8 h-8 bg-white/95 rounded-lg shadow-card border border-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl hover:bg-white select-none leading-none">−</button>
        </div>
      </div>
    </div>
  )
}
