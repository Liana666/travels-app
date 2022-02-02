import { combineReducers, createStore } from 'redux'
import CountrysReducer from './reducers/CountrysReducer'
import CartsReducer from './reducers/CartsReducer'

let reducers = combineReducers({
   ContryPage: CountrysReducer,
   CartPage: CartsReducer
})

const store = createStore(reducers)

export default store