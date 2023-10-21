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
    const mapBox = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/laynahwren/clnyyugvw004601q222r42b3b',
      center: [-97.5, 41], // starting position [lng, lat]
      zoom: 2.6, // starting zoom
      minZoom: 2.6
    });

    map.current = mapBox

    mapBox.on('load', () => {
      mapBox.addLayer({
        id: 'data-layer',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://laynahwren.cgjgscwc'
        },
        'source-layer': 'National_Obesity_By_State-2ay1vb',
        paint: {
          'fill-color': 'transparent'
        }
      })
    })

    mapBox.on('click', 'data-layer', (e) => {
      console.log(e)
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(setPopup(e.features[0].properties.NAME, e.features[0].properties.Obesity))
        .addTo(mapBox);
    })

    mapBox.on('mouseenter', 'data-layer', () => {
      mapBox.getCanvas().style.cursor = 'pointer';
    });

    mapBox.on('mouseleave', 'data-layer', () => {
      mapBox.getCanvas().style.cursor = '';
    })

  })

  const setPopup = (name, obesity) => {
    return (
      `<div id='popupState'>${name}</div><div id='popupObesity'>Obesity: ${obesity}%</div>`
    )
  }

  return (
    <>
      <div id='map' ref={mapContainer} />
      <div className='legend'>
        <div className='color-identifier' id='lowRange'></div>{'< 25'}
        <div className='color-identifier' id='midRange'></div>{'< 30'}
        <div className='color-identifier' id='highRange'></div>{'>= 30'}
      </div>
    </>
  );
}

export default Map