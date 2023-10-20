import { useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import './Map.css'

// declare var process: {
//     env: {
//         REACT_APP_MAPBOX_TOKEN: string
//     }
// }


const Map = (props) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF5bmFod3JlbiIsImEiOiJjbG55eTlpaWwwMm0wMnNyc3dnOTZ3MGVtIn0.NZjocPvkrGFUYNFfhGNKOA'
    const mapContainer = useRef(null)
    const map = useRef(null)
  
    useEffect(() => {
      if (map.current) return
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/laynahwren/clnyyugvw004601q222r42b3b',
        center: [-97.5, 38.5], // starting position [lng, lat]
        zoom: 3.3 // starting zoom
      });
    })

    return (
      <div id='map' ref={mapContainer} />
    );
}

export default Map