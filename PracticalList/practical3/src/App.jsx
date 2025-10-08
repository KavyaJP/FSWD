import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState(0);

  const handleAddition = () => {
    setTotal(Number(num1) + Number(num2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Adding Two Numbers ➕</h1>
        <div className="input-container">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"
          />
        </div>
        <button onClick={handleAddition}>Add Them Up!</button>
        <h2>Total: {total}</h2>
      </header>
    </div>
  );
}

export default App;