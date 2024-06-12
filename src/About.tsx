import CounterButton1 from "app1/CounterButton";
import useCount from "app1/store";

export default function About() {
  const [count, setCount] = useCount();
  return (
    <>
      <div className="container mx-auto px-4 bg-yellow-500">about us</div>
      <CounterButton1 name="fdgd"></CounterButton1>

      <h3>Button in shell app</h3>
      <button
        type="button"
        className="blue-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}
