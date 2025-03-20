import { Calendar, Clock } from 'lucide-react';
import { BottomNav } from "../components/BottomNav";

export function ServiceAppointment() {
  return (
    <div className="p-6 min-h-screen bg-orange-200">
      <div className="bg-orange-300 rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          <Calendar className="w-6 h-6 text-purple-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">Service Appointments</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Next Appointment</h3>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-purple-500 mr-2" />
              <p className="text-sm text-gray-600">Tomorrow at 2:30 PM - Grooming Service</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-blace mb-3">Upcoming Appointments</h3>
            <div className="space-y-3">
              {[
                { date: '2024-03-15', time: '14:30', service: 'Grooming', status: 'Confirmed' },
                { date: '2024-03-20', time: '10:00', service: 'Vaccination', status: 'Pending' },
                { date: '2024-03-25', time: '15:00', service: 'Check-up', status: 'Confirmed' },
              ].map((appointment, index) => (
                <div key={index} className="border rounded-lg bg-purple-50 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{appointment.service}</span>
                    <span className={`text-sm px-2 py-1 rounded ${
                      appointment.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {appointment.date} at {appointment.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors">
            Book New Appointment
          </button>
        </div>
      </div>
      < BottomNav />
    </div>
  );
}