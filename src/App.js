import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount} from './app/Slice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type='number'
      />
      <button onClick={() => dispatch(incrementByAmount())}>add</button>
  
    </div>
  );
}

export default App;
