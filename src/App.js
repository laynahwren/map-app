import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map/Map'
import Table from './components/Table/Table'

function App() {
  const [data, setData] = useState([])
  const [view, setView] = useState('map')

  useEffect(() => {
    fetch('https://services3.arcgis.com/HESxeTbDliKKvec2/arcgis/rest/services/LakeCounty_Health/FeatureServer/8/query?outFields=*&where=1%3D1&f=geojson')
      .then(response => response.json())
      .then(data => collectData(data.features))
  }, [])

  const collectData = (currData) => {
    let collectedData = currData.map(item => { return { state: item.properties.NAME, obesity: item.properties.Obesity } })
    setData(collectedData.sort((a, b) => a.state.localeCompare(b.state)))
  }

  return (
    <div className="App">
      <div className='page-title'>Obesity Statistics by State<div className='separator' /></div>
      <div className='page-content'>
        <div className='view-container'>
          <div className='button-container'>
            <button id='mapBtn' disabled={view === 'map'} onClick={() => setView('map')}>Map</button>
            <button id='tableBtn' disabled={view === 'table'} onClick={() => setView('table')}>Table</button>
          </div>
          {view === 'map' ? <Map /> :
            <Table data={data} />}
        </div>
        <div className='more-info'>
          *More info can be found at:
          <a href='https://catalog.data.gov/dataset/national-obesity-by-state-d765a' target='_blank' rel='noreferrer'>
            https://catalog.data.gov/dataset/national-obesity-by-state-d765a</a>
        </div>
      </div>
    </div>
  );
}

export default App;
