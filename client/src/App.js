import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://services3.arcgis.com/HESxeTbDliKKvec2/arcgis/rest/services/LakeCounty_Health/FeatureServer/8/query?outFields=*&where=1%3D1&f=geojson')
      .then(response => response.json())
      .then(data => collectData(data.features))
  }, [])

  const collectData = (currData) => {
    setData(currData.map(item=> {return {state: item.properties.NAME, obesity: item.properties.Obesity}}))
  }  

  return (
    <div className="App">
      <Map data={data} />
    </div>
  );
}

export default App;
