import { BUY_CAKE } from "./cakeTypes"

const initiaState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initiaState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,            
            numberOfCakes: state.numberOfCakes - action.payload           
        }
        default: return state
    }
}

export default cakeReducer