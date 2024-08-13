// src/App.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './hook/store';
import { increment, decrement } from './hook/feature/counter/counterSlice';

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className=" bg-slate-500 gap-2">
      <h1>Count: {count}</h1>
      <button className='m-2' onClick={() => dispatch(decrement())}>- Decrement</button>
      <button className='m-2' onClick={() => dispatch(increment())}>+ Increment</button>
    </div>
  );
};

export default App;
