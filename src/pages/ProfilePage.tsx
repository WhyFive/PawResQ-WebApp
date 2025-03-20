import { Camera, Mail, Phone, MapPin, Edit } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { LogOut } from "lucide-react";
import kk from "../img/kk.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/auth";

export function ProfilePage() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await auth.signOut();
        navigate("/home");
      };
  return (
    <div>
      <div className="h-full bg-orange-100 overflow-y-auto p-4 md:p-8 mb-16">
        <div className="max-w-4xl mx-auto ">
          <div className="bg-orange-200 rounded-2xl shadow-sm p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-6">
              <div className="flex gap-4 md:gap-6">
                <div className="relative">
                  <img
                    src={kk}
                    alt="Profile"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-orange-600 p-1 md:p-2 rounded-full text-white">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-black">
                    Teoh Kok Liang
                  </h1>
                  <p className="text-black">Pet Parent of Spike</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
              <button  onClick={handleSignOut} className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-orange-700">
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-black">
                  Contact Information
                </h2>
                <div className="flex items-center gap-3 text-black">
                  <Mail className="w-5 h-5" />
                  <span>kkliang@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <Phone className="w-5 h-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-black">
                  <MapPin className="w-5 h-5" />
                  <span>Malaysia, Perlis</span>
                </div>
              </div>

              {/* Pet Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Pet Information
                </h2>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=600&fit=crop"
                      alt="Pet"
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">Spike</h3>
                      <p className="text-gray-500">
                        Golden Retriever • 3 years old
                      </p>
                      <p className="text-gray-500">Male • 9.0 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring Stats */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-medium text-gray-600">Daily Steps</h3>
                  <p className="text-2xl font-bold text-gray-900">8,547</p>
                  <p className="text-sm text-gray-500">Today's Activity</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-medium text-gray-600">Sleep Hours</h3>
                  <p className="text-2xl font-bold text-gray-900">12.5</p>
                  <p className="text-sm text-gray-500">Last 24 hours</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-medium text-gray-600">Food Intake</h3>
                  <p className="text-2xl font-bold text-gray-900">850g</p>
                  <p className="text-sm text-gray-500">Today's meals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
