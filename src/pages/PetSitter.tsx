import { useState } from "react";
import { Dog, Star, Calendar, Clock, MapPin, Medal } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import jared from "../img/jared.png";
import edison from "../img/edison.png";
import hh from "../img/hh.png"

interface PetSitter {
  id: number;
  name: string;
  image: string;
  rating: number;
  experience: string;
  location: string;
  specialties: string[];
  hourlyRate: number;
}

const petSitters: PetSitter[] = [
  {
    id: 1,
    name: "Jared Lee",
    image: jared,
    rating: 4.9,
    experience: "5 years",
    location: "Downtown",
    specialties: ["Dogs", "Cats", "Small Pets"],
    hourlyRate: 25,
  },
  {
    id: 2,
    name: "Edison Liew",
    image: edison,
    rating: 4.8,
    experience: "3 years",
    location: "Westside",
    specialties: ["Dogs", "Senior Pets"],
    hourlyRate: 22,
  },
  {
    id: 3,
    name: "Han Hong",
    image:hh,
    rating: 4.7,
    experience: "4 years",
    location: "Eastside",
    specialties: ["Cats", "Birds", "Reptiles"],
    hourlyRate: 23,
  },
];

export function PetSitter() {
  const [selectedSitter, setSelectedSitter] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-orange-200 pb-20">
      {/* Header */}
      <header className="bg-orange-300 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-amber-500" />
            <h1 className="text-2xl font-bold text-gray-900">Pet Sitter Connect</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Pet Sitter</h2>
          <p className="text-gray-600">Experienced and caring pet sitters ready to take care of your furry friends</p>
        </div>

        <div className="w-1/25 mx-auto items-center grid grid-cols-1 gap-6">
          {petSitters.map((sitter) => (
            <div
              key={sitter.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                selectedSitter === sitter.id ? "ring-2 ring-pink-500 scale-105" : "hover:shadow-xl"
              }`}
              onClick={() => setSelectedSitter(sitter.id)}
            >
              <div className="flex flex-col items-center p-4">
                <img
                  src={sitter.image}
                  alt={sitter.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{sitter.name}</h3>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{sitter.rating}</span>
                </div>
                <div className="text-sm text-gray-600 mt-4 space-y-1 text-left">
                  <div><Clock className="inline-block mr-1" />{sitter.experience} experience</div>
                  <div><MapPin className="inline-block mr-1" />{sitter.location}</div>
                  <div><Medal className="inline-block mr-1" />{sitter.specialties.join(", ")}</div>
                </div>
                <div className="text-pink-500 text-xl font-bold mt-4">RM {sitter.hourlyRate}/hr</div>

                <button
                  className={`w-1/2 mt-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedSitter === sitter.id ? "bg-pink-600 text-white" : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                  }`}
                >
                  {selectedSitter === sitter.id ? "Selected" : "Select Sitter"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedSitter && (
          <div className="mt-8 text-center">
            <button className="bg-pink-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-pink-700 flex items-center mx-auto space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}