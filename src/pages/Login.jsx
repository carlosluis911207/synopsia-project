import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useAuth();

  const handleLogin = () => {
    login(email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#e7eaee]">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow">
        <h1
          className="text-4xl font-bold text-center mb-4 text-[#0046D5]"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          AJUNTATECH
        </h1>
        <div className="mb-4">
          <input
            required
            type="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full p-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            required
            type="password"
            placeholder="Contrasenya"
            className="shadow appearance-none border rounded w-full p-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 py-5">
          En utilitzar Ajuntatech, accepteu les{" "}
          <a href="#" className="text-[#0046D5]">
            Condicions del servei
          </a>{" "}
          i la
          <a href="#" className="text-[#0046D5]">
            Política de privadesa
          </a>
        </p>
      </div>
    </div>
  );
}
