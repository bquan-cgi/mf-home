import { Link, useNavigate } from "react-router-dom";
import { useSessionStore } from "./sessionStore";

export default function Header() {
  const navigate = useNavigate();
  const sessionStore = useSessionStore();

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

      <div className="basis-2/4">
        {sessionStore.token ? (
          <button
            onClick={() => {
              sessionStore.clearToken();
              navigate("/");
            }}
          >Hi, {sessionStore.token} [Log out]</button>
        ) : (
          <Link to="/login">[Login]</Link>
        )}
      </div>
    </div>
  );
}
