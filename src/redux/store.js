import { combineReducers, createStore } from 'redux'
import CountrysReducer from './reducers/CountrysReducer'

let reducers = combineReducers({
   ContryPage: CountrysReducer
})

const store = createStore(reducers)

export default store