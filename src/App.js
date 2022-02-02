import './App.sass'

import CountrysContainer from './components/Countrys/CountrysContainer'

const App = () => {
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
