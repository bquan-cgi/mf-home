import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full sm:w-1/3 md:w-1/4 px-2 bg-slate-300">
      {/* DONT use style here, with div-parent */}
      <aside>
        <div className="top-1 p-4 w-full">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app1">
                App 1
              </Link>
            </li>
            <li>
              <Link to="/app2">
                App 2
              </Link>
            </li>
            <li>
              <Link to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link to="/nan">
                NaN
              </Link>
            </li>

            {/*             <li>
              <a href="http://localhost:5001/">Main</a>
            </li>
            <li>
              <a href="http://localhost:3001/">App 1</a>
            </li>

            <li>
              <a href="http://localhost:5001/about">About</a>
            </li> */}
          </ul>
        </div>
      </aside>
    </div>
  );
}
