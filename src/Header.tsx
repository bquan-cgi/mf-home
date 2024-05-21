import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row p-5 bg-blue-100 text-white text-3xl font-bold">
      <div className="basis-1/4">
        <Link to="/">Home</Link>
      </div>
      <div className="basis-1/4">
        <Link id="about" to="/about">
          About us
        </Link>
      </div>
    </div>
  );
}
