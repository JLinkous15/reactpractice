import { useReducer, useState } from "react"

//ACTIONS are just a mapper to allow for autocompletion of string values
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
//The reducer function accepts all logic in a form to prevent state logic from being repeated. Think of it as useState, but more flexible.
function reducer(state, action) {
    switch (action.type){
        case ACTIONS.INCREMENT :
            return {count : state.count + 1}
        case ACTIONS.DECREMENT :
            return {count : state.count - 1}
        default:
            return state
    }   
}

export const UseReducer = () => {
    //useReducer typically accepts a user-written reducer function that stores all of the logic for the change of a state variable and an object, per OOP.
    const [state, dispatch] = useReducer(reducer, {count:0})
    const [count, setCount] = useState(0)
    //useState solution
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    //useReducer solution
    function incrementReducer() {
        dispatch({ type: ACTIONS.INCREMENT})
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function decrementReducer() {
        dispatch({ type: ACTIONS.DECREMENT})
    }



    return <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    <br /><br />
    <button onClick={decrementReducer}>-</button>
    <span>{state.count}</span>
    <button onClick={incrementReducer}>+</button>
    </>
}