import { useState } from 'react'



export default function CounterButton() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-amber-300 px-2">
        <button className='bg-green-200 w-36' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    );
  }
  