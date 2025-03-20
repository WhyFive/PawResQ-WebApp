import { useNavigate } from "react-router-dom";
//import { Layers } from 'lucide-react';
import first from "../img/first.png";

export function FirstPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-orange-200 flex items-center justify-center">
      <div className="text-center animate-fade-in px-4">
        <div className="w-64 h-64 mx-auto object-cover bg-[#3E2723] p-2 shadow-md mb-4">
          <img
            src={first}
            alt="First Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <button
            onClick={() => navigate("/login")}
            className="w-64 bg-orange-500 text-black py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="w-64 bg-orange-500 text-black py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
