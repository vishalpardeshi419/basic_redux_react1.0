import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './userTypes'

const initiaState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initiaState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,            
            loading: true           
        }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,           
            error: ''
        }
        case FETCH_USER_ERROR: return {
            loading: false,           
            error: action.error,
            users: [],
        }
        default: return state
    }
}

export default userReducer