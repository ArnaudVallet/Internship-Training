import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/features/counter';

function Counter() {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    return (
        <>
            <h1> The count is: {count}</h1>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(33))}>
                Increment by 33
            </button>
        </>
    )
}

export default withRouter(Counter);
