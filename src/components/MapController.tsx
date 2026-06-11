import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import type { Map as LeafletMap } from 'leaflet'

interface Props {
  onReady: (map: LeafletMap) => void
}

/**
 * Must be rendered as a child of <MapContainer>.
 * Captures the Leaflet map instance and reports it upward via onReady().
 */
export default function MapController({ onReady }: Props) {
  const map = useMap()

  useEffect(() => {
    onReady(map)
  }, [map, onReady])

  return null
}
