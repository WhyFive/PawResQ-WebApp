import { Heart } from 'lucide-react';
import { BottomNav } from "../components/BottomNav";


export function HealthScreening() {
  return (
    <div className="p-6 min-h-screen bg-orange-200">
      <div className="bg-orange-300 rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Heart className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">Pet Health Screening</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Latest Health Check</h3>
            <h2 className="font-small text-gray-700 mb-2">Name: Spike</h2>
            <h2 className="font-small text-gray-700 mb-2">Gender: Male</h2>
            <h2 className="font-small text-gray-700 mb-2">Age: 3</h2>
            <h2 className="font-small text-gray-700 mb-2">Breed: Golden Retriever</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-medium">9.0 kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="font-medium">38.5°C</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-black mb-3">Health Records</h3>
            <div className="space-y-3">
              {[
                { date: '2024-03-01', type: 'Vaccination', details: 'Annual shots' },
                { date: '2024-02-15', type: 'Check-up', details: 'Regular check-up' },
              ].map((record, index) => (
                <div key={index} className="border rounded-lg p-3 bg-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{record.type}</span>
                    <span className="text-sm text-gray-500">{record.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{record.details}</p>
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