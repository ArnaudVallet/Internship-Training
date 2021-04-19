import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/features/counter';

function App() {

  //const [count, setCount] = React.useState(0)
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </div>
  );
}

export default App;
