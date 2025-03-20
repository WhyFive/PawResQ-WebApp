import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/auth";
import { Heart, MapPin, Calendar, Image } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Search } from 'lucide-react';


export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { user } = await auth.getUser();
      if (!user) {
        navigate("/login");
      }
    };
    checkUser();
  }, [navigate]);


  const menuItems = [
    {
      icon: Heart,
      label: "Health Screening",
      path: "/health-screening",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: MapPin,
      label: "GPS Tracking",
      path: "/gps-tracking",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calendar,
      label: "Appointments",
      path: "/appointments",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Image,
      label: "Media Library",
      path: "/media",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* search bar */}
          <div className="flex items-center w-full max-w-md mx-auto mt-5 p-2 border bg-white border-gray-300 rounded-2xl shadow-md">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow outline-none text-sm text-gray-700"
            />
            <button
              className="ml-3 px-4 py-1 bg-orange-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`${item.bgColor} p-6 rounded-lg shadow-sm cursor-pointer transform transition-all duration-200 hover:scale-105`}
            >
              <div className="flex items-center">
                <item.icon className={`w-8 h-8 ${item.color} mr-4`} />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.label}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">View details</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
