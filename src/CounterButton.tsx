import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-100 px-2 m-3 border-dashed border-2 border-green-500">
      <p className="italic">
        button in home default text-red-600, bg-gray-300,
      </p>
      <button
        className="font-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>

      <h1>h1 in remote CounterButton gray-600?</h1>
      <h2>h2 from remote</h2>
      <button className="blue-button">blue-button</button>
    </div>
  );
}
