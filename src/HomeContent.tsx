//import CounterButton from "./CounterButton";
import CounterButton1 from "app1/CounterButton";
import CounterButton2 from "app2/CounterButton";

export default function HomeContent() {
  return (
    <>
      <div className="container mx-auto p-4 bg-orange-300">
        <h1>Shell App home</h1>
      </div>

      <div className="bg-green-200 m-3 p-4">
        <CounterButton1></CounterButton1>
      </div>

      <div>
        <CounterButton2></CounterButton2>
      </div>
    </>
  );
}
