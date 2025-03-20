import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
// import { Layers } from "lucide-react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/first");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center">
      <div className="w-full max-w-xs text-center item-center animate-fade-in px-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo Image"
          className="w-30 h-30 mx-auto object-contain mb-4"
        />
        {/* Loding Icon */}
        <svg 
          className="animate-spin h-12 w-12 text-white mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="from-blue-500 to-blue-600"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="white"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>

        {/* <h1 className="text-3xl font-bold text-white">MyApp</h1> */}
      </div>
    </div>
  );
}
