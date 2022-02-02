const ADD_CURRENT_COUNTRYS = "ADD_CURRENT_COUNTRYS"

let initialState = {
    currentCountry: ''
}

const CartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_COUNTRYS:
            return {
                ...state, currentCountry: action.currentCountry
            }

        default:
            return state
    }
}

export const addCurrentCountry = (currentCountry) => ({ type: ADD_CURRENT_COUNTRYS, currentCountry })


export default CartsReducer