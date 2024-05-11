import { useReducer } from 'react'

type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increment' | 'decrement' | 'reset'
    payload: number
}

const initialState = {
    count: 0 
}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <>
                Count1: {state.count}
                <br />
                <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                    Increment 10
                </button>
                <br />
                <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                    Decrement 10
                </button>
                <br />
                <button onClick={() => dispatch({ type: 'reset', payload: 0})}>
                    Reset
                </button>
            </>
            <br /><br /><br />
        </div>
    )
}
