import { MapPin } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import map from "../img/map.png";

export function GpsTracking() {
  return (
    <div className="p-6 bg-orange-200">
      <div className="bg-orange-300 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <MapPin className="w-6 h-6 text-blue-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Pet GPS Tracking
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center w-full h-full relative">
              <img
                src={map}
                alt="Logo Image"
                className="w-full h-full object-cover rounded-lg" // Changed from object-contain to object-cover
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <Navigation className="w-8 h-8 text-blue-500 mb-2" />
              </div>
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-600">
                Map view will be displayed here
              </p> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">
                Current Location
              </h3>
              <p className="text-sm text-gray-600">UOW Malaysia</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Last Updated</h3>
              <p className="text-sm text-gray-600">5 minutes ago</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700 mb-3">
              Recent Activities
            </h3>
            <div className="space-y-3">
              {[
                { time: "14:30", location: "AL ALI NASI KANDAR" },
                { time: "13:45", location: "Pet Park" },
                { time: "12:30", location: "Pet Clinic" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <span className="text-sm text-gray-600">{activity.time}</span>
                  <span className="text-sm font-medium">
                    {activity.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
