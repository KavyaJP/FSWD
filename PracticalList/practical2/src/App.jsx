import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const Decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <div className="counter-container">
        <h1>React Counter</h1>
        <h2 className="count-display">{count}</h2>
        <div className="button-group">
          <button onClick={Increment}>Increment +</button>
          <button onClick={Decrement}>Decrement -</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;