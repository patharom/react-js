import { useState } from 'react';

export function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(a => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button className='w-20 bg-orange-500 m-2' onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button className='w-20 bg-orange-500 m-2' onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}

export default Counter