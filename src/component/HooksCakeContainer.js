import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numberOfCake = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes With Hook - {numberOfCake} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )        
}

export default HooksCakeContainer