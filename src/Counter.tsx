import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Value: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
