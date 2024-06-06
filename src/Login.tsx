import { useNavigate } from "react-router-dom";
import { useSessionStore } from "./sessionStore";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("bugs bunny");
  const navigate = useNavigate();
  const sessionStore = useSessionStore();

  return (
    <div className="p-5 bg-blue-100 text-white text-3xl font-bold">

<input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <button
        onClick={() => {
          sessionStore.setToken(name);
          navigate("/");
        }}
      >
        Click to perform a login!
      </button>
    </div>
  );
}
