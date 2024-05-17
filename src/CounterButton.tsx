import { useState } from 'react'



export default function CounterButton() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-amber-300">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    );
  }
  