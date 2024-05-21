import { Link } from "react-router-dom";
import CounterButton from "./CounterButton";

export default function HomeContent() {
  return (
    <>
      <div className="container mx-auto p-4 bg-orange-300">
        <h1>H1 default in remote home bg-gray-400</h1>
        <h1 className="bg-blue-400">H1 bg-blue-400 in home-remote</h1>
      </div>

      <div className="bg-green-200 m-3 p-4">
        <h2>Counter button in home-remote</h2>
        <CounterButton></CounterButton>
      </div>


      <Link id="app1" to="/app1">
                Go to App 1
              </Link>
    </>
  );
}
