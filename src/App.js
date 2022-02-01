import './App.sass'
import { useEffect, useState } from 'react'

import CountrysContainer from './components/Countrys/CountrysContainer'

const App = () => {
  const [countrys, setCountrys] = useState([])

  useEffect(() => {
    fetch('http://myjson.dit.upm.es/api/bins/3d37')
      .then(res => res.json())
      .then(body => {
        let res = body
        setCountrys(res)
      })
  }, [])


  console.log(countrys)

  return (
    <div className="App">
      <header className="App__header">
        Our travels
      </header>
      <CountrysContainer />
    </div>
  )
}

export default App
