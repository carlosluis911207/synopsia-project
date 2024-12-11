import { useAuth } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ title, children }) {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white text-[#888] py-5 font-sans font-weight-[500] shadow-md">
        <div className="container mx-auto flex justify-around">
          <div className="">{title}</div>
          <div className="flex items-center flex-col md:flex-row">
            {location.pathname === "/dashboard" ? (
              <span>Benvingut, {user}</span>
            ) : (
              <Link to="/dashboard" className="text-[#0046D5] md:px-4 px-0">
                Dashboard
              </Link>
            )}
            <button onClick={logout} className="text-[#0046D5] md:px-4 px-0">
              Tancar sessió
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1 container mx-auto bg-[#e7eaee]">{children}</main>
    </div>
  );
}
