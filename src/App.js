import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let [count,setCount]=useState(0);
  const incButton=()=>{
    setCount(++count)
  }
  const decButton=()=>{
    setCount(--count)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button class="btn1" onClick={incButton}>Increment</button>
      <button class="btn2" onClick={decButton}>Decrement</button>
    </div>
  );
}

export default App;
