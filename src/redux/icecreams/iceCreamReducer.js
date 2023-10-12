import { BUY_ICECREAM } from "./iceCreamTypes"

const initiaState = {
    numberOfIceCreams: 20
}

const iceCreamReducer = (state = initiaState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,            
            numberOfIceCreams: state.numberOfIceCreams -1     
        }
        default: return state
    }
}

export default iceCreamReducer