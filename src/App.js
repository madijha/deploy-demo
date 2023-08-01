import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [count,setCount]=useState(0);
  const incButton=()=>{
    setCount(++count)
  }
  const decButtonButton=()=>{
    setCount(--count)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incButton}>Increment</button>
      <button onClick={decButton}>Decrement</button>
    </div>
  );
}

export default App;
