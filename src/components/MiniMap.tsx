import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet'

type LatLng = [number, number]

const fieldPolygons: { id: string; status: string; color: string; positions: LatLng[] }[] = [
  { id: 'F-2025-0012', status: 'Growing', color: '#16a34a', positions: [[-6.324, 108.320], [-6.322, 108.323], [-6.325, 108.325], [-6.327, 108.322]] },
  { id: 'F-2025-0013', status: 'Harvest Ready', color: '#eab308', positions: [[-6.318, 108.315], [-6.316, 108.318], [-6.319, 108.320], [-6.321, 108.317]] },
  { id: 'F-2025-0014', status: 'Growing', color: '#16a34a', positions: [[-6.330, 108.310], [-6.328, 108.313], [-6.331, 108.315], [-6.333, 108.312]] },
  { id: 'F-2025-0015', status: 'Planted', color: '#3b82f6', positions: [[-6.313, 108.328], [-6.311, 108.331], [-6.314, 108.333], [-6.316, 108.330]] },
  { id: 'F-2025-0016', status: 'Fallow', color: '#9ca3af', positions: [[-6.336, 108.325], [-6.334, 108.328], [-6.337, 108.330], [-6.339, 108.327]] },
]

export default function MiniMap() {
  return (
    <MapContainer center={[-6.325, 108.320]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org">OSM</a>'
      />
      {fieldPolygons.map(f => (
        <Polygon key={f.id} positions={f.positions} pathOptions={{ color: f.color, fillColor: f.color, fillOpacity: 0.4, weight: 2 }}>
          <Popup><strong>{f.id}</strong><br />Status: {f.status}</Popup>
        </Polygon>
      ))}
    </MapContainer>
  )
}
