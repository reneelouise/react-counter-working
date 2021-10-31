import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleReset = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - counterValueFromCurrentRender)
    // TODO reset counter to 0 here
  }

  const minusFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5)
    // TODO reset counter to 0 here
  }

  const minusOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1)
    // TODO reset counter to 0 here
  }

  const addFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5)
    // TODO reset counter to 0 here
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={minusFive}>-5</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={addFive}>+5</button>
      
      <button onClick={handleReset}>Reset counter</button>
      
    </>
  );
}

export default CounterDemo;
