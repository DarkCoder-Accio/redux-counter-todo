

// for every action I will be creating action creator

// actions => are objects with type 

// action creators => are functions that return actions

import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js"

// actions cretors: 

export const increment = (value=1) => {
    return {
         type: INCREMENT,
         value: value
    }

}

export const decrement = () => {
    return {
         type: DECREMENT
    }
}

export const reset = () => {
    return {
         type: RESET
    }
}