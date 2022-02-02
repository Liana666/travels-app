import './App.sass'
import CartsContainer from './components/Carts/CartsContainer'

import CountrysContainer from './components/Countrys/CountrysContainer'

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        Our travels
      </header>
      <CountrysContainer />
      <CartsContainer />
    </div>
  )
}

export default App
