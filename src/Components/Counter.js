import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset} from '../redux/actions/counterActions.js'


const Counter = () => {
     const counter = useSelector(state => state)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={()=>dispatch(increment())}>Inc</button>
            <button onClick={()=>dispatch(decrement())}>Dec</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter;


// getState  and dispatch
// store