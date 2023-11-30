import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  const handleMultiplication = () => {
    setResult(number1 * number2);
  };

  const handleDivision = () => {
    if (number2 !== 0) {
      setResult(number1 / number2);
    } else {
      setResult('Cannot divide by zero');
    }
  };

  return (
    <div>
      <input style={{margin:"20px"}}
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      /><br/><br/>
      <input style={{margin:"20px"}}
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      /><br/><br/>
      <br />
      <button style={{margin:"5px"}} onClick={handleAddition}>Add</button>
      <button style={{margin:"5px"}} onClick={handleSubtraction}>Subtract</button>
      <button style={{margin:"5px"}} onClick={handleMultiplication}>Multiply</button>
      <button style={{margin:"5px"}} onClick={handleDivision}>Divide</button>
      <br />
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;
