import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function itemContainer(props) {
    return (
        <div>
            <h2>Number of Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )        
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ?
        state.cake.numberOfCakes :
        state.iceCream.numberOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(itemContainer)