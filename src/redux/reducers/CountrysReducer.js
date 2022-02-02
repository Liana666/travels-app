const ADD_ALL_COUNTRYS = "ADD_ALL_COUNTRYS"

let initialState = {
   countries: []
}

const CountrysReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_ALL_COUNTRYS:
         return {
            ...state, countries: [...state.countries, ...action.countries]
         }

      default:
         return state
   }
}

export const addCountrys = (countries) => ({ type: ADD_ALL_COUNTRYS, countries })


export default CountrysReducer