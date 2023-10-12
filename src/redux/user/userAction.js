import axios from 'axios'
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    ADD_USER_REQUEST,
    FETCH_USER_ERROR
} from './userTypes'

export const fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUEST
    }
}

export const addUserRequest = users => {
    return {
        type : ADD_USER_REQUEST,
        payload: users
    }
}

export const fetchUserSuccess = users => {
    return {
        type : FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserError = error => {
    return {
        type : FETCH_USER_ERROR,
        payload: error
    }
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6IlRoZXZpc2hpUmVnMSIsInJvbGVzIjpbMjAwMSwxOTg0LDUxNTBdfSwiaWF0IjoxNjk3MDEwNjg3LCJleHAiOjE2OTcwMTEyODd9.ffLGQe-Jk_o8-7A4t3CqCRmR2MaLOabCHAYftnVVl8Y"
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('/employees', config)
        .then(responce => {
            const users = responce.data
            console.log('users', users)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchUserError(errorMsg))
        })
    }
}