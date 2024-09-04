import { useEffect, useState } from 'react'
import { getData } from './resources'
import Container from "./leaflet-container/leaflet.container";

export default function App() {

  const [alertasData, setAlertasData] = useState([])

  useEffect(() => {
    getData('alertas').then(rs => {
      setAlertasData(rs)
      console.log('Response: ', rs)
    })
  }, [])


  return (
    <Container alertas={alertasData} />
  )
}