import CounterButton from "app1/CounterButton";
// import CounterButton1 from "app1/CounterButton1";
const CounterButton1 = React.lazy(() => import('app1/CounterButton1'))
import useCount from "app1/store";
import React from "react";

export default function About() {
  const [count, setCount] = useCount();
  return (
    <>
      <div className="container mx-auto px-4 bg-yellow-500">about us</div>
      <CounterButton1 greeting="rgrg" gd="hi"></CounterButton1>

      <h3>Button in shell app</h3>
      <button
        type="button"
        className="blue-button"
        onClick={() => setCount((count: number) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}
