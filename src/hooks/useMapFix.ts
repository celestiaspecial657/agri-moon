import { useEffect, useRef, useCallback } from 'react'
import type { Map as LeafletMap } from 'leaflet'

/**
 * Permanently fixes Leaflet tile rendering in React flex/grid layouts.
 *
 * Handles:
 *  - Initial mount (map measured before layout settles)
 *  - Sidebar open/close
 *  - Details panel open/close
 *  - Window resize
 *  - Route navigation (remount)
 *  - Any container size change via ResizeObserver
 */
export function useMapFix() {
  const mapRef       = useRef<LeafletMap | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const observerRef  = useRef<ResizeObserver | null>(null)

  const invalidate = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize({ animate: false, pan: false })
    }
  }, [])

  /* Store map instance from inside MapContainer via useMap() */
  const onMapReady = useCallback((map: LeafletMap) => {
    mapRef.current = map
    /* Staggered invalidation to catch layout settling at different speeds */
    invalidate()
    setTimeout(invalidate, 50)
    setTimeout(invalidate, 150)
    setTimeout(invalidate, 400)
  }, [invalidate])

  /* Attach ResizeObserver to the wrapper div */
  const setContainerRef = useCallback((node: HTMLDivElement | null) => {
    /* Cleanup previous observer */
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }

    containerRef.current = node

    if (node) {
      observerRef.current = new ResizeObserver(() => {
        /* Fires on ANY size change: sidebar, panel, window, flex reflow */
        invalidate()
      })
      observerRef.current.observe(node)
    }
  }, [invalidate])

  /* Window resize fallback for browsers without ResizeObserver */
  useEffect(() => {
    window.addEventListener('resize', invalidate)
    return () => window.removeEventListener('resize', invalidate)
  }, [invalidate])

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return { setContainerRef, onMapReady, invalidate }
}
