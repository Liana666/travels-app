import './App.sass'
import CartsContainer from './components/Carts/CartsContainer'

import CountriesContainer from './components/Countries/CountriesContainer'

const App = () => {
  return (
    <div className="App">
      <header className="App__header">
        Our travels
      </header>
      <CountriesContainer />
      <CartsContainer />
    </div>
  )
}

export default App
