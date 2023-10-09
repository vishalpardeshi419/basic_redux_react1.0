import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer() {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCream With Hook - {numberOfIceCream} </h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )        
}

export default IceCreamContainer