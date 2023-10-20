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
    setData(currData.map(item => { return { state: item.properties.NAME, obesity: item.properties.Obesity } }))
  }

  return (
    <div className="App">
      <div className='view-container'>
        <div className='button-container'>
          <button onClick={() => setView('map')}>Map</button>
          <button onClick={() => setView('table')}>Table</button>
        </div>
        {view === 'map' ? <Map data={data} /> :
          <Table data={data} />}
      </div>
    </div>
  );
}

export default App;
